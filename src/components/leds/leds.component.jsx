import React, { useState, useEffect } from "react";

import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
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


const LEDs = ({user}) => {
  const [allLeds, setAllLeds] = useState({});
  const [adminUrl, setAdminUrl] = useState('');


  useEffect(() => {
    fetchLEDs(user.attributes.email);
  }, []);

  async function fetchLEDs(email) {
    const allLEDData = await API.graphql(
      graphqlOperation(getAllLeds, { email: email })
    );
    let allLedObject = JSON.parse(allLEDData.data.getAllLeds).Item;
    const customAdminUrl = allLedObject['customAdminUrl'];
    delete allLedObject['email']
    delete allLedObject['customAdminUrl']
    setAdminUrl(customAdminUrl);
    setAllLeds(allLedObject);
  }


  return (
    <View className="App">
      <button onClick={() => Auth.signOut()}>Sign Out</button>
    </View>
  );
};

export default LEDs;