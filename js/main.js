var Log = require( './log' );

var vm = new Vue({
    el: '#ble-console',
    data: {
        title: 'BLE-CONSOLE',
        counter : 0,
        logs: []
    },
    created: function() {
      var self = this;
      console.log("initialized!");
      setInterval(function(){
        self.logs.push(new Log(self.counter ++));
      }, 2000);
    },
    methods: {
        clear: function () {
            this.logs = [];
        }
    }
});
