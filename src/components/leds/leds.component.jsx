import React, { useState, useEffect } from "react";

import "@aws-amplify/ui-react/styles.css";
import { View } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import fetchLEDs from './fetchLeds.script';
import "./leds.styles.scss";
import Scenes from './scenes.component.jsx';
import CreateDevice from './createDevice.component.jsx';
import UpdateDevices from './updateDevices.component.jsx';



const LEDs = ({user}) => {
  const [allLeds, setAllLeds] = useState({});
  const [adminUrl, setAdminUrl] = useState('');
  const email = user.attributes.email;
  const [selectedDevices, setSelectedDevices] = useState({})
  const [devicesPulled, setDevicesPulled] = useState(false);
  const [newDevice, setNewDevice] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [showDevices, setShowDevices] = useState(true);
  const [pullDeviceError, setPullDeviceError] = useState(false);


  useEffect(() => {
    fetchLEDs(email).then((res)=>{
      const {customAdminUrl, allLedObject} = res;
      setAdminUrl(customAdminUrl);
      setAllLeds(allLedObject);
      setDevicesPulled(true);
      setPullDeviceError(false);
    }).catch((err)=>{
      setDevicesPulled(true);
      setPullDeviceError(true);
    });
  }, []);



  const deviceClick = (event) =>{
    if(selectedDevices[event.target.innerHTML]){
      delete selectedDevices[event.target.innerHTML]
    }else{
      selectedDevices[event.target.innerHTML] = allLeds[event.target.innerHTML].thing
    }
    setSelectedDevices({...selectedDevices})
  }

  const reloadDevices = () =>{
    fetchLEDs(email).then((res)=>{
      const {customAdminUrl, allLedObject} = res;
      setOpenUpdate(false);
      setAdminUrl(customAdminUrl);
      setAllLeds(allLedObject);
    });
  }


  return (
    <View className="ledView">
      <div className="ledNav">
        <button className="signOutButton ledNavButtons" onClick={() => Auth.signOut()}>Sign Out</button>
        <div className="createUpdateContainer">
          {devicesPulled ? 
            <>  
                <button className="createDeviceButton ledNavButtons" onClick={() => setNewDevice(!newDevice)}>New Device</button>
                <button className="updateDeviceButton ledNavButtons" onClick={(()=>setOpenUpdate(!openUpdate))}>Update Devices</button>
            </>
          : null }
        </div>
      </div>

      <div className="createDeviceForm">
        <CreateDevice newDevice={newDevice} devices={allLeds} email={email} customAdminUrl={adminUrl} reloadDevices={reloadDevices}/>
      </div>
      <div className="updateDeviceForm">
        <UpdateDevices openUpdate={openUpdate} devices={allLeds} email={email} customAdminUrl={adminUrl} reloadDevices={reloadDevices}/>
      </div>

      <h2 className="centerText clickable" onClick={e=>setShowDevices(!showDevices)}>{showDevices ? 'Hide Devices' : 'Show Devices' }</h2>
      {showDevices ? 
        <div className='buttonContainers'>
          {!devicesPulled ? <h2 className="centerText">Loading Devices...</h2> : Object.keys(allLeds).map((key, i)=>{
              return (
                <button className={selectedDevices[key] ? 'deviceSelected deviceButtons': 'deviceButtons' } key={`${i}device`} onClick={deviceClick}>{key}</button>
              )
            })}
            {devicesPulled && Object.keys(allLeds).length ===0 &&  !pullDeviceError? <h2 className="centerText">Create A Device</h2> : null}
            {devicesPulled && Object.keys(allLeds).length ===0 &&  pullDeviceError? <h2 className="centerText">Error Pulling Devices</h2> : null}

        </div>
      : null }
      <br></br>
      <h2 className="centerText">Device Control</h2>
      <Scenes selectedDevices={selectedDevices} />
    </View>
  );
};

export default LEDs;