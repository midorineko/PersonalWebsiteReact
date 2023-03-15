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
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "../../graphql/mutations";
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
    console.log(customAdminUrl)
    console.log(allLedObject);
    setAdminUrl(customAdminUrl);
    setAllLeds(allLedObject);
  }

  // async function createNote(event) {
  //   event.preventDefault();
  //   const form = new FormData(event.target);
  //   const data = {
  //     name: form.get("name"),
  //     description: form.get("description"),
  //   };
  //   await API.graphql({
  //     query: createNoteMutation,
  //     variables: { input: data },
  //   });
  //   fetchNotes();
  //   event.target.reset();
  // }

  // async function deleteNote({ id }) {
  //   const newNotes = notes.filter((note) => note.id !== id);
  //   setNotes(newNotes);
  //   await API.graphql({
  //     query: deleteNoteMutation,
  //     variables: { input: { id } },
  //   });
  // }

  return (
    <View className="App">
      <button onClick={() => Auth.signOut()}>Sign Out</button>
      {/* <button onClick={() => Auth.signOut()}>Sign Out</button>

      <Heading level={1}>My Notes App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Notes</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="span">{note.description}</Text>
            <Button variation="link" onClick={() => deleteNote(note)}>
              Delete note
            </Button>
          </Flex>
        ))}
      </View> */}
    </View>
  );
};

export default LEDs;