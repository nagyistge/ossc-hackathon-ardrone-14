var arDrone = require('ar-drone');
// var http    = require('http');

//var pngStream = arDrone.createClient().getPngStream();
var client = arDrone.createClient();
// client.disableEmergency();

// console.log('Connecting png stream ...');
// var pngStream = client.getPngStream();

// var lastPng;
// pngStream
//   .on('error', console.log)
//   .on('data', function(pngBuffer) {
//     lastPng = pngBuffer;
//   });

// var server = http.createServer(function(req, res) {
//   if (!lastPng) {
//     res.writeHead(503);
//     res.end('Did not receive any png data yet.');
//     return;
//   }

//   res.writeHead(200, {'Content-Type': 'image/png'});
//   res.end(lastPng);
// });

// server.listen(8080, function() {
// console.log('Serving latest png on port 8080 ...');
  client.takeoff();

  client
    .after(5000, function() {
      this.front(0.1);
    })
    .after(4000, function() {
      this.stop();
      // this.land();
    })
    
    .after(5000, function() {
      this.counterClockwise(0.5);
    })
    .after(2000, function() {
      this.stop();
      // this.land();
    })

    .after(5000, function() {
      this.front(0.1);
    })
    .after(4000, function() {
      this.stop();
      this.land();
    })

    ;



// });
