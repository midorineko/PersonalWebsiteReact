import { getAllLeds } from "../../graphql/queries";
import { graphqlOperation } from "aws-amplify";
import { API } from "aws-amplify";

async function fetchLEDs(email) {
    const allLEDData = await API.graphql(
      graphqlOperation(getAllLeds, { email: email })
    );
    if(allLEDData.data.getAllLeds === '{}'){
      return 'empty'
    }else{
      let allLedObject = JSON.parse(allLEDData.data.getAllLeds).Item;
      console.log(allLEDData)
      const customAdminUrl = allLedObject['customAdminUrl'];
      delete allLedObject['email']
      delete allLedObject['customAdminUrl']
      return {customAdminUrl: customAdminUrl.thing, allLedObject: allLedObject}
    }
}

export default fetchLEDs;