var mqtt = require('mqtt');
var SerialPort = require('serialport');

/*var serialPort = new SerialPort('COM3', {
    baudRate: 9600
});

var readLineParser = new SerialPort.parsers.Readline('\n\r');
serialPort.pipe(readLineParser);*/

const TOPIC = 'Moisture';

var client = mqtt.connect('ws://localhost:8000');
client.on('connect', () => {
    setInterval(() => {
        client.publish(TOPIC, (Math.random() * 100).toString());
    }, 1000);
                /*readLineParser.on('data', data => {
                client.publish(TOPIC, data);
            });*/
});