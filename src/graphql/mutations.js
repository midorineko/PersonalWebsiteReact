/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNewDevice = /* GraphQL */ `
  mutation CreateNewDevice(
    $email: String
    $thingName: String
    $thingId: String
    $devices: String
  ) {
    createNewDevice(
      email: $email
      thingName: $thingName
      thingId: $thingId
      devices: $devices
    )
  }
`;
export const updateDevices = /* GraphQL */ `
  mutation UpdateDevices($email: String, $devices: String) {
    updateDevices(email: $email, devices: $devices)
  }
`;
