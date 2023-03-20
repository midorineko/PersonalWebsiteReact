import {useState} from 'react'
import { graphqlOperation } from "aws-amplify";
import { updateDevices } from "../../graphql/mutations";
import { API } from "aws-amplify";


const UpdateDevices = ({devices, email, customAdminUrl, reloadDevices}) => {
    const [openUpdate, setOpenUpdate] = useState(false);
    const updatingDevices = async (e) => {
        e.preventDefault();
        const devicesToUpdate = {};
        e.target['devices'].forEach((device, i)=>{
            if(device.value){
                const oldName = device.getAttribute('oldname');
                delete devices[oldName]
                devices[device.value] = {thing: e.target['devicesId'][i].value}
            }
        })
        devices['customAdminUrl'] = {thing: customAdminUrl};
        const updateDevicesReturn = await API.graphql(
            graphqlOperation(updateDevices, { email: email, devices: JSON.stringify(devices) })
        );
        console.log(updateDevicesReturn)
        setOpenUpdate(false);
        reloadDevices();
    }
    return (
        <>
            <button className="updateDeviceButton" onClick={(()=>setOpenUpdate(!openUpdate))}>Update Devices</button>
            {openUpdate ? 
                <form onSubmit={updatingDevices}>
                        {Object.keys(devices).map((device, i)=>{
                            return(
                                <div key={`updatedevices${i}`}>
                                    <input type="text" name='devices' oldname={device} placeholder={device} />
                                    <input style={{width: '50%'}} type="text" name='devicesId' value={devices[device].thing} disabled/>
                                </div>
                            )
                        })}
                        <input type="submit" value="Update" />
                </form>
            : null }
        </>
    )
}
export default UpdateDevices