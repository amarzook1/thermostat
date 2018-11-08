$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateTemperature() { //updating temp method
    $('#temperature').text(thermostat.temperature);
  };

  updateTemperature();

  $('#temp-up').on('click' function() { // event listener
    thermostat.up();// update model
    updateTemperature(); //update view
  });

  $('#temp-down').click(function() { //different way to do event listener
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  };
});
