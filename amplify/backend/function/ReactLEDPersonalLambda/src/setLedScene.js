const AWS = require('aws-sdk');
var keys = require('./keys')
var iotData = new AWS.IotData({endpoint: keys.iotendpoint});

const setLedScene = async (things) =>{
    things = JSON.parse(things);
    thingKeys = Object.keys(things);
    const send_text = things[thingKeys[0]]
    var payloadObj={ "state":
        { "desired":
                {"scene":send_text}
        }
    };
    var shadowParams = {
        "thingName" : thingKeys[0],
        "payload" : JSON.stringify(payloadObj)
    };
    await iotData.updateThingShadow(shadowParams).promise()
        .then(res => {
            delete things[thingKeys[0]]
            if(Object.keys(things).length > 0 ){
                return setLedScene(JSON.stringify(things));
            }else{
                console.log("shadow return: ", res);
                return "Successfully Set Scene"
            }
        })
        .catch(err => {
            console.error(err);
            return err
        });
}
module.exports = setLedScene;