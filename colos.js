const request = require('request');
const argv = require('yargs').argv;


let apiKey = '3e86ebb08a9b9805df13a82c0f1b6d43';
let city = argv.c || 'Nelson';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
    if(err) {
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees celsius in ${weather.name}!`;
console.log(message);

        console.log('body:', body);
        }
});



