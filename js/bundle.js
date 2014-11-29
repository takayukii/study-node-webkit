(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(content){

  this.content = content;
  this.date = new Date();

  this.isOld = function(){

    var now = new Date();
    var diff = now.getTime() - this.date.getTime();

    // 1分以上経ってる
    if((diff / (1000 * 60)) > 1){
      return true;
    }else{
      return false;
    }
  };

  console.log(this.date, this.content);

};


},{}],2:[function(require,module,exports){
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

},{"./log":1}]},{},[2]);
