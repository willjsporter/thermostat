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
      thermo.powersafe = false;
      thermo.change(21);
    }).toThrow("Maximum temp is 32C when powersafe is off");
  });

  it("temp can be reset", function(){
      thermo.change(-9);
      thermo.reset();
      expect(thermo.temp).toEqual(20);
  });

  it("returns 'low-usage' if low temp", function(){
      thermo.change(-9);
      expect(thermo.currentUsage).toMatch('low-usage');
  });

  it("returns 'medium-usage' if medium temp", function(){
      thermo.change(-2);
      expect(thermo.currentUsage).toMatch('medium-usage');
  });

  it("returns 'high-usage' if high temp", function(){
      thermo.powersafe = false
      thermo.change(9);
      expect(thermo.currentUsage).toMatch('high-usage');
  });
});
