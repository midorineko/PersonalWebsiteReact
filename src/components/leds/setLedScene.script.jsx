import { setLedScene } from "../../graphql/queries";
import { API } from "aws-amplify";
import { graphqlOperation } from "aws-amplify";


async function SetLedScene(things) {
    const sceneReturn = await API.graphql(
      graphqlOperation(setLedScene, { things: things })
    );
    return (sceneReturn)
}

export default SetLedScene;