const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
var keys = require('./keys');


const updateDevices = async (event) =>{
    console.log('Updating Devices');
    const devices = JSON.parse(event.arguments.devices);
    const email = event.arguments.email;

    const obj = {
        email: email,
        ...devices
     };
     var dynamoParams = {
        'TableName':'LED_Hub',
        'Item': {
          ...obj
        },
    };
    try{
        const putItem = await docClient.put(dynamoParams).promise();
        console.log(putItem);
        return 'Updated Items';
    }catch(err){
        console.log(error);
        return 'Error Updating Items';
    }

}
module.exports = updateDevices;