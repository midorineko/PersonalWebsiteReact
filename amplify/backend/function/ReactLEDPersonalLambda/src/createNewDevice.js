const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
var keys = require('./keys')
var iot = new AWS.Iot({region: 'us-east-1'});
const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});


const createNewDevice = async (event) =>{
    console.log('create new device');
    const uniq_id = event.arguments.thingId;
    const uniq_name = event.argument.thingName;
    const email = event.argument.email;
    // var params = {
  	//   thingName: uniq_id, /* required */
  	//   attributePayload: {
  	//     attributes: {
  	//       'onTheFlyCreation': 'MrCatNapsOnTheFly',
  	//       /* '<AttributeName>': ... */
  	//     },
  	//     merge: true || false
  	//   }
  	// };

    // var params = {
    // TableName : 'LED_Hub',
    // Item: {
    //     PK: 'email',
    //     NumAttribute: 1,
    //     BoolAttribute: true,
    //     ListAttribute: [1, 'two', false],
    //     MapAttribute: { foo: 'bar'},
    //     NullAttribute: null
    // }
    // };
    
    
    // docClient.put(params, function(err, data) {
    // if (err) console.log(err);
    // else console.log(data);
    // });


  	// await iot.createThing(params).promise()
    //   .then(res => {
    //     console.log('thing created: ', res)

    //     return res
    //   })
    //   .catch(err => {
    //       console.error(err);
    //       return err
    //   });
}
module.exports = createNewDevice;