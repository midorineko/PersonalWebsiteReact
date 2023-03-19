

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();
const getAllLEDs = require('./getAllLeds.js');
const setLedScene = require('./setLedScene.js');
const createNewDevice = require('./createNewDevice.js')
const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});



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
        const obj = {
            email: 'mrcatnaps@gmail.com',
         };
         obj['thingName'] = {'thing': 'meowmix'}
         var params = {
            'TableName':'LED_Hub',
            'Item': {
              ...obj
            },
        };
        const putItem = await documentClient.put(params).promise();
        console.log(putItem);
        return putItem
      
        // try{
        //     const data = await createNewDevice(event);
        //     console.log("return data: ", data)
        //     return JSON.stringify(data);
        // }catch(err){
        //     return {error: err};
        // }
    }else{
        return 'Query Not Found'
    }

    // const email = event.arguments.email;
    // const method = event.fieldName;
    // const response = [email,method];
    // return response;
};
