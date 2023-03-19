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
import fetchLEDs from './fetchLeds.script'
import SetLedScene from './setLedScene.script'
import "./leds.styles.scss"
import Scenes from './scenes.component.jsx'
import CreateDevice from './createDevice.component.jsx'


const LEDs = ({user}) => {
  const [allLeds, setAllLeds] = useState({});
  const [adminUrl, setAdminUrl] = useState('');
  const email = user.attributes.email;
  const [selectedDevices, setSelectedDevices] = useState({})


  useEffect(() => {
    fetchLEDs(email).then((res)=>{
      const {customAdminUrl, allLedObject} = res;
      console.log(allLedObject)
      setAdminUrl(customAdminUrl);
      setAllLeds(allLedObject);
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


  return (
    <View className="App">
      <button onClick={() => Auth.signOut()}>Sign Out</button>
      <CreateDevice devices={allLeds} email={email}/>
      <br></br><br></br>
      {!allLeds ? 'Loading Devices...' : Object.keys(allLeds).map((key, i)=>{
        return <button className={selectedDevices[key] ? 'deviceSelected': null } key={`${i}device`} onClick={deviceClick}>{key}</button>
      })}
      <br></br><br></br>
      <Scenes selectedDevices={selectedDevices} />
    </View>
  );
};

export default LEDs;