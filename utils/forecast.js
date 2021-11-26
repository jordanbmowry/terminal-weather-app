const axios = require('axios');
const chalk = require('chalk');

const { API_KEY } = process.env;
const forecast = (lat, lng) => {
  const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${lat},${lng}&units=f`;
  return axios
    .get(url)
    .then(({ data }) => {
      if (!data.request) {
        console.log(data.error);
      } else {
        const {
          temperature,
          feelslike: feelsLike,
          weather_descriptions,
        } = data.current;

        const [description] = weather_descriptions;

        return `${description}! It is currently ${temperature} degrees out. It feels like ${feelsLike} degrees out.`;
      }
    })
    .catch((error) => chalk.red(error.message));
};

module.exports = forecast;
