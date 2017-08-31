"use strict";

var Thermostat = function (){
  this.temp=20;
  this.change = function(num){
    if(this.temp+num>=10){
      this.temp=this.temp+num
    }
    else{throw "Minimum temp is 10C"};

};
};
