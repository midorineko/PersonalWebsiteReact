const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const getAllLEDs = async (event) =>{
    const params = {
        TableName: 'LED_Hub',
        Key:{
            email: event.arguments.email
        }
    }
    try{
        const data = await docClient.get(params).promise();
        return data
    }catch(err){
        return err
    }
}
module.exports = getAllLEDs;