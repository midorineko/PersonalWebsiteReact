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
      setAdminUrl(customAdminUrl);
      setAllLeds(allLedObject);
    });
  }


  return (
    <View>
      <div class="ledNav">
        <button onClick={() => Auth.signOut()}>Sign Out</button>
        <div class="createUpdateContainer">
          {devicesPulled ? 
            <>  
                <div className="createDeviceForm">
                  <CreateDevice devices={allLeds} email={email} customAdminUrl={adminUrl} reloadDevices={reloadDevices}/>
                </div>
                <div className="updateDeviceForm">
                  <UpdateDevices devices={allLeds} email={email} customAdminUrl={adminUrl} reloadDevices={reloadDevices}/>
                </div>
            </>
          : null }
        </div>
      </div>

      <br></br><br></br>
      {!devicesPulled ? 'Loading Devices...' : Object.keys(allLeds).map((key, i)=>{
        return <button className={selectedDevices[key] ? 'deviceSelected': null } key={`${i}device`} onClick={deviceClick}>{key}</button>
      })}
      <br></br><br></br>
      <Scenes selectedDevices={selectedDevices} />
    </View>
  );
};

export default LEDs;