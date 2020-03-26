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


const form =document.querySelector(".top-banner form");

form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;
});

fetch(url)
    .then(response => response.json())
    .then(data => {})
    .catch(() => {
        msg.textContent = "Please search for a valid city";
    })

    const {main, name, sys, weather} = data ;
    const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;

    const li = document.createElement("li");
    li.classList.add("city");
    const markup = `
    <h2 class="city-name" data-name="${name},${sys.country}">
    <span>${name}</span>
    <sup>${sys.country}</sup>
    </h2>
    <div class ="city-temp">${math.round(main.temp)}<sup>°C</sup>
    </div>
    <figure>
    <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
    <figcaption>${weather[0]["description"]}</figcaption>
    </figure>
    `;

    li.innerHTML=markup;
    list.appendChild(li);
