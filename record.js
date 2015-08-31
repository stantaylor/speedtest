var moment = require('moment');
moment().format();
var fs = require('fs');
var speedTest = require('speedtest-net');

test = speedTest({maxTime: 5000});

test.on('data', function (data) {

  var now = new Date();

  console.log('Date      : ' + new Date());
  var date = moment(now).format('YYYY-MM-DD HH:MM:SS');
  var ping = data.server.ping;
  var download = data.speeds.download;
  var upload = data.speeds.upload;
  var server = data.server.host;

  var line = date + ',' + +ping + ',' + download + ',' + upload + ',' + server + '\n';
  //console.log(line);

  fs.appendFile('speedtest.txt', line,
    function (err) {
      if (err) throw(err);
      console.log('Wrote line to file: ' + line);
      //console.log(data);
    }
  );
});

test.on('error', function (err) {
  console.error(err);
});
