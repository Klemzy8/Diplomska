// Uvozimo knjižnico za senzor
var sensorLib= require('node-dht-sensor');

var dht_sensor = {
	initialize: function () {
		return sensorLib.initialize(11, 4); // 11- model senzorja DHT11, 4- beremo iz GPIO 4
	},
	read:function () {
		var readout = sensorLib.read(); //zapišemo odčitane vrednosti
		console.log('Temperatura: ' + readout.temperature.toFixed(2) +'°C' + ' vlaga: ' +
		 readout.humidity.toFixed(2) + '%'); // zapis v konzolo
		setTimeout(function () {
			dht_sensor.read();
		}, 2000); // beremo na 2s
	}
};

if(dht_sensor.initialize()) {
	dht_sensor.read();
} else {
	console.warn('Failed to initialize sensor');
}
