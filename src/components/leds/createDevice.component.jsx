import {useState} from 'react'
import { graphqlOperation } from "aws-amplify";
import { createNewDevice } from "../../graphql/mutations";
import { API } from "aws-amplify";


const CreateDevice = ({devices, email, customAdminUrl, reloadDevices, newDevice}) => {
    const [createErrorMsg, setCreateErrorMsg] = useState('');


    const submitNewDevice = async (event) => {
        event.preventDefault();
        const deviceName = event.target['deviceName'].value;
        if(deviceName.length < 3){
            setCreateErrorMsg('Device Name Needs To Be Atleast 3 Characters');
        }else if(devices[deviceName]){
            setCreateErrorMsg('Duplicate Device, Try Updating It');
        }else{
            setCreateErrorMsg('');
            const deviceEmail = email.replace(/[^a-zA-Z0-9 ]/g, '');
            const deviceId = deviceEmail + event.target['deviceId'].value;
            devices['customAdminUrl'] = {thing: customAdminUrl};
            const submitDeviceReturn = await API.graphql(
                graphqlOperation(createNewDevice, { email: email, thingName: deviceName, thingId: deviceId, devices: JSON.stringify(devices) })
            );
            console.log(submitDeviceReturn)
            reloadDevices();
        }
    }
    return(
        <>
                {createErrorMsg ? <div>{createErrorMsg}</div> : null}
                {newDevice ?
                    <form onSubmit={submitNewDevice}>
                        <div className="updateDeviceFormItem">
                            <label>
                                Device Name:
                                <input type="text" name="deviceName" />
                            </label>
                        </div>
                        <div className="updateDeviceFormItem">
                            <label>
                                ID:
                                <input type="text" name="deviceId" value={Object.keys(devices).length+1} disabled/>
                            </label>
                        </div>
                        <div className="updateDeviceFormItem">
                            <input className='submitButton' type="submit" value="Submit" />
                        </div>
                    </form>
                : null }

        </>
    )
}
export default CreateDevice;