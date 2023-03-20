import React, { useState, useEffect } from "react";

import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator
} from "@aws-amplify/ui-react";
import { getAllLeds } from "../../graphql/queries";
import { Auth, graphqlOperation } from "aws-amplify";
import { API } from "aws-amplify";
import fetchLEDs from './fetchLeds.script';
import SetLedScene from './setLedScene.script';
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


  useEffect(() => {
    fetchLEDs(email).then((res)=>{
      const {customAdminUrl, allLedObject} = res;
      setAdminUrl(customAdminUrl);
      setAllLeds(allLedObject);
      setDevicesPulled(true);
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
      <div class="ledNav">
        <button className="signOutButton ledNavButtons" onClick={() => Auth.signOut()}>Sign Out</button>
        <div class="createUpdateContainer">
          {devicesPulled ? 
            <>  
                <button className="createDeviceButton ledNavButtons" onClick={() => setNewDevice(!newDevice)}>New Device</button>
                <button className="updateDeviceButton ledNavButtons" onClick={(()=>setOpenUpdate(!openUpdate))}>Update Devices</button>
            </>
          : null }
        </div>
      </div>

      <div className="createDeviceForm">
        <div>
          <CreateDevice newDevice={newDevice} devices={allLeds} email={email} customAdminUrl={adminUrl} reloadDevices={reloadDevices}/>
        </div>
      </div>
      <div className="updateDeviceForm">
        <UpdateDevices openUpdate={openUpdate} devices={allLeds} email={email} customAdminUrl={adminUrl} reloadDevices={reloadDevices}/>
      </div>

      <h2 class="centerText">Devices</h2>
      <div class='buttonContainers'>
        {!devicesPulled ? <h2 class="centerText">Loading Devices...</h2> : Object.keys(allLeds).map((key, i)=>{
            return (
              <button className={selectedDevices[key] ? 'deviceSelected deviceButtons': 'deviceButtons' } key={`${i}device`} onClick={deviceClick}>{key}</button>
            )
          })}
          {devicesPulled && Object.keys(allLeds).length ===0 ? <h2 class="centerText">Create A Device</h2> : null}
      </div>
      <br></br>
      <h2 class="centerText">Device Control</h2>
      <Scenes selectedDevices={selectedDevices} />
    </View>
  );
};

export default LEDs;