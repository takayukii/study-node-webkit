var Log = require( './log' );
var io = require('socket.io-client');
var socket = io();

var vm = new Vue({
    el: '#ble-console',
    data: {
        title: 'BLE-CONSOLE',
        counter : 0,
        logs: []
    },
    created: function() {
      var self = this;

      socket.on('trace', function(content) {
        console.log("trace");
        self.logs.push(new Log(JSON.stringify(content)));
      });

      socket.on('advertise', function(content) {
        console.log("advertise");
        self.logs.push(new Log(JSON.stringify(content)));
      });
      console.log("emit trace");
      socket.emit('trace');

    },
    methods: {
        start: function () {
          console.log("emit advertise");
          socket.emit('advertise');
        },
        clear: function () {
            this.logs = [];
        }
    }
});
