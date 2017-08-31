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
});
