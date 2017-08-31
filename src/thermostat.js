"use strict";

var Thermostat = function (){
  this.temp=20;
  this.change = function(num){
    if(this.temp+num<10){
      throw "Minimum temp is 10C"
    }
    else if(this.temp+num>25){
      throw "Maximum temp is 25C on powersafe mode"
    }
    else{this.temp=this.temp+num};

};
};
