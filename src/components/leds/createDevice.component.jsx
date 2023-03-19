import {useState} from 'react'
import { graphqlOperation } from "aws-amplify";
import { createNewDevice } from "../../graphql/mutations";
import { API } from "aws-amplify";


const CreateDevice = ({devices, email, customAdminUrl}) => {
    const [newDevice, setNewDevice] = useState(false);


    const submitNewDevice = async (event) => {
        event.preventDefault();
        const deviceName = event.target['deviceName'].value;
        const deviceEmail = email.replace(/[^a-zA-Z0-9 ]/g, '');
        const deviceId = deviceEmail + event.target['deviceId'].value;
        devices['customAdminUrl'] = {thing: customAdminUrl};
        const submitDeviceReturn = await API.graphql(
            graphqlOperation(createNewDevice, { email: email, thingName: deviceName, thingId: deviceId, devices: JSON.stringify(devices) })
        );
        console.log(submitDeviceReturn)
    }
    return(
        <>
            <button onClick={() => setNewDevice(!newDevice)}>New Device</button>
            {newDevice ?
                <form onSubmit={submitNewDevice}>
                    <label>
                        Device Name:
                        <input type="text" name="deviceName" />
                    </label>
                    <label>
                        ID:
                        <input type="text" name="deviceId" value={Object.keys(devices).length+1} disabled/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            : null }
        </>
    )
}
export default CreateDevice;