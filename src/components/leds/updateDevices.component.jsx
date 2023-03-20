import {useState} from 'react'
import { graphqlOperation } from "aws-amplify";
import { updateDevices } from "../../graphql/mutations";
import { API } from "aws-amplify";


const UpdateDevices = ({devices, email, customAdminUrl, reloadDevices, openUpdate}) => {
    const deviceEmail = email.replace(/[^a-zA-Z0-9 ]/g, '');

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
        console.log(devices)
        reloadDevices();
    }
    return (
        <>
            {openUpdate ? 
                <form onSubmit={updatingDevices}>
                        <div className="updateInputs">
                            <input className="centerText" value="Invoke Name" disabled/>
                            <div className="centerText updateDeviceId">Device ID</div>
                        </div>
                        {Object.keys(devices).map((device, i)=>{
                            return(
                                <div className="updateInputs" key={`updatedevices${i}`}>
                                    <input type="text" name='devices' oldname={device} placeholder={device} />
                                    <div className="centerText updateDeviceId" type="text" name='devicesId' value={devices[device].thing} > {devices[device].thing.replace(deviceEmail,"")}</div>
                                </div>
                            )
                        })}
                        <input className='updateButton' type="submit" value="Update" />
                </form>
            : null }
        </>
    )
}
export default UpdateDevices