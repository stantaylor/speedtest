var speedTest=require('speedtest-net');
 
  test=speedTest({maxTime:5000});
  
  test.on('data',function(data){
    console.log('Date      : ' + new Date());
    console.log('Download  : ' + data.speeds.download);
    console.log('Upload    : ' + data.speeds.upload);

    console.log(data);
  });

  test.on('error',function(err){
    console.error(err);
  });
