import { setLedScene } from "../../graphql/queries";
import { graphqlOperation } from "aws-amplify";
import { API } from "aws-amplify";

async function SetLedScene(email, things) {
    const sceneReturn = await API.graphql(
      graphqlOperation(setLedScene, { things: things })
    );
    return (sceneReturn)
}

export default SetLedScene;