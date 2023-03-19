const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
var keys = require('./keys');
var iot = new AWS.Iot({region: 'us-east-1'});

const createThing = async (params) =>{
  await iot.createThing(params).promise()
  .then(res => {
    console.log('thing created: ', res)

    return res
  })
  .catch(err => {
      console.error(err);
      return err
  });
}

const createDbEntry = async (dynamoParams) => {
  const putItem = await docClient.put(dynamoParams).promise();
  console.log(putItem);
  return putItem
}

const createNewDevice = async (event) =>{
    console.log('create new device');
    const devices = JSON.parse(event.arguments.devices);
    const uniq_id = event.arguments.thingId;
    const uniq_name = event.arguments.thingName;
    const email = event.arguments.email;

    var params = {
      thingName: uniq_id, /* required */
      attributePayload: {
        attributes: {
          'onTheFlyCreation': 'MrCatNapsOnTheFly',
          /* '<AttributeName>': ... */
        },
        merge: true || false
      }
    };

    devices[uniq_name] = {thing: uniq_id}
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
      const createThingz = await createThing(params);
      console.log(createThingz)
      const createDbEnt = await createDbEntry(dynamoParams);
      console.log(createDbEnt)
      return 'Device Created';
    }catch(err){
      console.log(err);
      return 'Error Creating Device'
    }

}
module.exports = createNewDevice;