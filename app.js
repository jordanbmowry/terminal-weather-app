require('dotenv').config();

const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');
const chalk = require('chalk');

const userInput = process.argv[2];

const getWeather = async (searchLocation) => {
  try {
    const { latitude, longitude, location } = await geocode(searchLocation);
    const forecastReport = await forecast(latitude, longitude);
    console.log(chalk.bold.bgWhite.black(location));
    console.log(chalk.magenta(forecastReport));
  } catch (error) {
    console.error(error);
  }
};

if (userInput) {
  getWeather(userInput);
} else {
  console.log('Please provide an address.');
}
