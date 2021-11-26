const axios = require('axios');
const chalk = require('chalk');

const { MAPBOX_TOKEN } = process.env;

const geocode = (address) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${MAPBOX_TOKEN}&limit=1`;

  return axios
    .get(url)
    .then(({ data }) => {
      if (!data.features.length) {
        return console.log('Unable to find location. Try another search.');
      }
      return {
        latitude: data.features[0].center[1],
        longitude: data.features[0].center[0],
        location: data.features[0].place_name,
      };
    })
    .catch((error) => chalk.red(error.message));
};

module.exports = geocode;
