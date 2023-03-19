

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const getAllLEDs = require('./getAllLeds.js');
const setLedScene = require('./setLedScene.js');
const createNewDevice = require('./createNewDevice.js')
const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
const updateDevices = require('./updateDevices.js')


exports.handler = async (event) => {
    console.log(event);

    if(event.fieldName ===  'getAllLeds'){
        try{
            const data = await getAllLEDs(event);
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
    }else if(event.fieldName === 'createNewDevice'){
        try{
            const data = await createNewDevice(event);
            console.log("return data: ", data)
            return JSON.stringify(data);
        }catch(err){
            return {error: err};
        }
    }else if(event.fieldName === 'updateDevices'){
        try{
            const data = await updateDevices(event);
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
