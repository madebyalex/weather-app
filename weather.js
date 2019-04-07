class Weather {
    constructor(city, state) {
        this.apiKey = 'a9ac29c2ea3959a1ce47d886bd5e800a';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;

        // console.log(responseData);
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}