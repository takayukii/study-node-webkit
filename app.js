var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use(express.static(__dirname));

io.on('connection', function(socket) {

  socket.on('trace', function() {

    console.log("trace");
    var Bleacon = require('bleacon');
    Bleacon.startScanning();

    Bleacon.on('discover', function(bleacon) {
       console.log(bleacon);
       socket.emit('trace', bleacon);
    });

  });

  socket.on('advertise', function() {

    console.log("advertise");
    var Bleacon = require('bleacon');

    var uuid = '805D6740-F575-492A-8668-45E553EB9DF2';
    var major = 1;
    var minor = 1;
    var measuredPower = -50;

    Bleacon.startAdvertising(uuid, major, minor, measuredPower);

    socket.emit('advertise', {'advertise' : 'accept'});
  });

});

http.listen(port, function() {
  console.log('Server listening on port ' + port);
});


