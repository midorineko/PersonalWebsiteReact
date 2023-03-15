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


const LEDs = ({user}) => {
  const [allLeds, setAllLeds] = useState({});
  const [adminUrl, setAdminUrl] = useState('');
  const email = user.attributes.email;


  useEffect(() => {
    fetchLEDs(email).then((res)=>{
      const {customAdminUrl, allLedObject} = res;
      setAdminUrl(customAdminUrl);
      setAllLeds(allLedObject);
    });
  }, []);

  const setScene = async () => {
    console.log('inhere')
    let things = ['thing1','thing2'];
    let thingObj = {}
    things.forEach((thing) => {return thingObj[thing] = 'rainbow'})
    SetLedScene(JSON.stringify(thingObj)).then((res)=>{
      console.log(res)
    })
  }


  return (
    <View className="App">
      {/* <button onClick={() => Auth.signOut()}>Sign Out</button> */}
      <button onClick={setScene}>set led scene</button>
    </View>
  );
};

export default LEDs;