class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.cloudiness = document.getElementById('w-cloudiness');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {

        // Convert wind degrees into direction
        let degree = weather.wind.deg;
        let direction = '';

        if (degree < 11.5 || degree  >= 349) { direction = "North"; }
        else if (degree >= 11.5 && degree < 34) { direction = "North-North-East"; }
        else if (degree >= 34 && degree < 56.5) { direction = "North-East"; }
        else if (degree >= 56.5 && degree < 79) { direction = "East-North-East"; }
        else if (degree >= 79 && degree < 101.5) { direction = "East"; }
        else if (degree >= 101.5 && degree < 103) { direction = "EastSouthEast"; }
        else if (degree >= 103 && degree < 147.5) { direction = "South-East"; }
        else if (degree >= 147.5 && degree < 169) { direction = "South-South-East"; }
        else if (degree >= 169 && degree < 191.5) { direction = "South"; }
        else if (degree >= 191.5 && degree < 214) { direction = "South-South-West"; }
        else if (degree >= 214 && degree < 236.5) { direction = "SouthWest"; }
        else if (degree >= 236.5 && degree < 259) { direction = "West-South-West"; }
        else if (degree >= 259 && degree < 281.5) { direction = "West"; }
        else if (degree >= 281.5 && degree < 304) { direction = "West-North-West"; }
        else if (degree >= 304 && degree < 326.5) { direction = "NorthWest"; }
        else if (degree >= 326.5 && degree < 349) { direction = "NorthNorthWest"; }
        else { direction = degree + 'degrees' }

        this.location.textContent = weather.name + ', ' + weather.sys.country;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = Math.round(weather.main.temp) + '℃';
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.icon.setAttribute('alt', `Weather in ${weather.name}, ${weather.sys.country}: ${weather.weather[0].description}`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
        this.cloudiness.textContent = `Cloudiness: ${weather.clouds.all}%`;
        this.wind.textContent = `Wind: ${weather.wind.speed} m/s, ${direction}`;
    }
}