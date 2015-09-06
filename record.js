var moment = require('moment');
moment().format();
var fs = require('fs');
var speedTest = require('speedtest-net');
var mysql      = require('mysql');

test = speedTest({maxTime: 5000});

test.on('data', function (data) {

  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'r1937Freud',
    database : 'speedtest'
  });
 
  connection.connect();

  var query = 'INSERT INTO speedtest (ping,download,upload,server)  VALUES (' 
		+ data.server.ping + ',' 
		+ data.speeds.download + ',' 
		+ data.speeds.upload + ',\'' 
		+ data.server.host 
		+ '\')';
  console.log(query);

  connection.query(query, function(err, rows, fields) {
    if (err) throw err;
  });
 
  connection.end();

});

test.on('error', function (err) {
  console.error(err);
});
