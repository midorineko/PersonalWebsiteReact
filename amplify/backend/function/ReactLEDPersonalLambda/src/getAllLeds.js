const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const getAllLEDs = async (params) =>{
    try{
        const data = await docClient.get(params).promise();
        return data
    }catch(err){
        return err
    }
}
module.exports = getAllLEDs;