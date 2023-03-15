

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const getAllLEDs = require('./getAllLeds.js');
const setLedScene = require('./setLedScene.js');


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
    }else if(event.fieldName === 'setLedScene'){
        try{
            const data = await setLedScene(event.arguments.things);
            console.log("return data: ", data)
            return JSON.stringify(data);
        }catch(err){
            return {error: err};
        }
    }else{
        return 'Query Not Found'
    }

    // const email = event.arguments.email;
    // const method = event.fieldName;
    // const response = [email,method];
    // return response;
};
