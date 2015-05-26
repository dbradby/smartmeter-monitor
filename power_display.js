var request = require("request");

var SATURATION = "1.0";
var BRIGHTNESS = "0.1";

var PowerDisplay = function(options) {
	var self = this;

	this.lowest_power = options.lowest_power;
	this.highest_power = options.highest_power;
	this.min_hue = options.min_hue;
	this.max_hue = options.max_hue;

	this.lifx_token = options.lifx_token;
	this.lifx_globe = options.lifx_globe;
}

PowerDisplay.prototype.update = function(power) {
	var value = power.value;
	var start = value - this.lowest_power;
	var percentage_usage = start / (this.highest_power - this.lowest_power);
	var usage_degress = ((this.max_hue - this.min_hue) * percentage_usage) + this.min_hue;

	if (usage_degress > 360 && usage_degress < 360 + this.min_hue - 20) {
		usage_degress = usage_degress - 360;
	} else if (usage_degress >= 360 + this.min_hue) {
		usage_degress = this.min_hue - 20;
	}

	var color_value = "hue:" + usage_degress + " saturation:" + SATURATION + " brightness:" + BRIGHTNESS;

	request.put("https://api.lifx.com/v1beta1/lights/" + this.lifx_globe + "/color", {
		form: {
			color: color_value,
			duration: '4.0'
		},
		'auth': {
			'bearer': this.lifx_token
		}
	});
};

module.exports = PowerDisplay;
