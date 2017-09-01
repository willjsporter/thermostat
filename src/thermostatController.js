$( document ).ready(function() {
    var thermostat = new Thermostat();
    $( '#temp' ).text("Temperature: " + thermostat.temp)
    $( '#powersafe' ).text("Powersave: on")
    // $( '#checkUse' ).text("Current Usage: " + thermostat.currentUsage)

    $( "#controls input[id='+5']" ).click(function() {
      thermostat.change(5);
      update();
    });


    $( "#controls input[id='+1']" ).click(function() {
      thermostat.change(1);
      update();
    });


    $( "#controls input[id='-1']" ).click(function() {
      thermostat.change(-1);
      update();
    });


    $( "#controls input[id='-5']" ).click(function() {
      thermostat.change(-5);
      update();
    });


    $( "#controls input[id='powersafe']" ).click(function() {
      thermostat.powersafe = !thermostat.powersafe;
      updatePS();
    });


    $( "#controls input[id='checkUse']" ).click(function() {
      thermostat.currentUsage();
    });


    $( "#controls input[id='reset']" ).click(function() {
      thermostat.reset();
      update();
    });

    function update() {
      $( '#temp' ).text("Temperature: " + thermostat.temp);
      // $( '#checkUse' ).text("Current Usage: " + thermostat.currentUsage());
      $( '#body' ).attr('class', thermostat.currentUsage());
   };
    function updatePS() { $( '#powersafe' ).text(thermostat.powersafe);
    if (thermostat.powersafe) {
      $( '#powersafe' ).text('Powersafe: on')}
      else {
        $( '#powersafe' ).text('Powersafe: off')
      }
    };


    // they see me codin
    // they hatin
    // jquerin, tryna catch me codin dirty
    //

});
