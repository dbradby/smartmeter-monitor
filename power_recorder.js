var influx = require("influx");

var PowerRecorder = function(options) {

	client = influx({
		host: options.influx_server,
		username: options.influx_user,
		password: options.influx_passwd,
		database: options.influx_dbname
	});
}

PowerRecorder.prototype.submit = function(power) {

	client.writePoint('power', {
		time: new Date(),
		value: power.value
	});

}

module.exports = PowerRecorder;
