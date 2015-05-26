var options = require('./settings'),
	Raven = require("./lib/raven.js"),
	PowerDisplay = require("./power_display"),
	PowerRecorder = require("./power_recorder");

var raven = new Raven(options);
var display = new PowerDisplay(options);
var recorder = new PowerRecorder(options);

// when the serial port opens
raven.on("open", function() {

	// respond to power events
	raven.on('power', function(power) {

		// update the display with the current power
		display.update(power);

		// record the current power
		recorder.submit(power);

	});
});
