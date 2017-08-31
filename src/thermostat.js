"use strict";

var Thermostat = function (){
  this.temp=20;
  this.powersafe = true
  this.change = function(num){
    if(this.temp+num<10){
      throw "Minimum temp is 10C"
    }
    else if(this.temp+num>25 && this.powersafe){
      throw "Maximum temp is 25C on powersafe mode"
    }
    else if(this.temp+num>32){
      throw "Maximum temp is 32C when powersafe is off"
    }
    else{this.temp=this.temp+num};

};
};
