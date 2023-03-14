

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const getAllLEDs = require('./getAllLeds.js');


exports.handler = async (event) => {
    console.log(event);

    const params = {
        TableName: 'LED_Hub',
        Key:{
            email: event.arguments.email
        }
    }

    if(event.fieldName ===  'getAllLeds'){
        try{
            const data = await getAllLEDs(params);
            return JSON.stringify(data);
        }catch(err){
            return {error: err};
        }
    }

    // const email = event.arguments.email;
    // const method = event.fieldName;
    // const response = [email,method];
    // return response;
};
