const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
var keys = require('./keys')
var iotData = new AWS.IotData({endpoint: keys.iotendpoint});

const setLedScene = async (things) =>{
    let send_text = 'rainbow';
    let thing = 'steveninouye91gmailcom1'

    var payloadObj={ "state":
                        { "desired":
                                {"scene":send_text}
                        }
                };
    var shadowParams = {
        "thingName" : thing,
        "payload" : JSON.stringify(payloadObj)
    };
    console.log("params: ", shadowParams)
    let updateShadow = await iotData.updateThingShadow(shadowParams).promise()
        .then(res => {
            console.log("shadow return: ", res);
            return "Successfully Set Scene"
        })
        .catch(err => {
            console.error(err);
            return err
        });
    return (updateShadow);
}
module.exports = setLedScene;