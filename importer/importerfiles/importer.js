var request = require('request');

var idmapping= {};

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('idmapping.txt')
});

lineReader.on('line', function (line) {
    var localID = line.split("=>")[0];
    var foreignID = line.split("=>")[1];
    idmapping[localID]=foreignID;
});

var x = 1;
var loopid = function(length) {
    customAlert(x,function(){
        x++;
        if(x < length+1) {
            loopid(length);
        }
    });
}

function customAlert(i,callback) {
    if (i in idmapping){
        var requesturl = 'http://localhost:3000/sensors/'+idmapping[i]+'/values/';
        request.post(requesturl, { json: { value: 'somevalue' } },
            function (error, response, body){ 
                if (!error) {
                    console.log('New values added to sensor '+idmapping[i]);
                }
                else {console.log("Error: "+error)}
                callback();
            });
    }
    else{
        request.post('http://localhost:3000/sensors', { json: { owner: 'maria', model: 'netatmo' } },
            function (error, response, body) {
                if (!error) {
                    console.log('New sensor added to the API: '+JSON.stringify(body));
                    require('fs').appendFileSync('idmapping.txt', "\n"+i+"=>"+body.sensorid);
                    callback();
                }
                else {console.log("Error: "+error)};
            });
    }
}

lineReader.on('close', function (){
    loopid(10);
});
