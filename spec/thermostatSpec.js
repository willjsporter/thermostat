'use strict';

describe("Thermostat", function() {
  var thermo;

  beforeEach(function() {
    thermo = new Thermostat();
  });

  it("should have 20C as default temp", function() {
    expect(thermo.temp).toEqual(20);
  });

  it("should be able to increase temp", function() {
    thermo.change(1);
    expect(thermo.temp).toEqual(21);
  });

  it("should be able to decrease temp", function() {
    thermo.change(-5);
    expect(thermo.temp).toEqual(15);
  });

  it("should throw an error when temp goes below 10C", function(){
    expect(function() {
      thermo.change(-11);
    }).toThrow("Minimum temp is 10C");
  });

  it("should throw an error when temp goes above 25C by default", function(){
    expect(function() {
      thermo.change(11);
    }).toThrow("Maximum temp is 25C on powersafe mode");
  });

  it("should throw an error when temp goes above 32C when powersafe is off", function(){
    expect(function() {
      thermo.powersafe = false
      thermo.change(21);
    }).toThrow("Maximum temp is 32C when powersafe is off");
  });
});
