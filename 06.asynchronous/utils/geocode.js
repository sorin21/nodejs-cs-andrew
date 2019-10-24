const request = require('request');

const geocode = (address, callback) => {
  const urlMapBox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodeURIComponent(address) }.json?access_token=pk.eyJ1Ijoic29yaW4yMXVzIiwiYSI6ImNrMDljYjMwazA2cGUzam51bXAwOW84bTkifQ.hrJdXEgL8WSeqtQIU0HnlA&limit=0`
  request({ url: urlMapBox, json: true }, (error, response) => {
    if (error) {
      // either we put undefined for sec argument, either js will put it automatically
      callback('Unable to connect to location service!', undefined)
    } else if (response.body.features.length === 0) {
      callback('Unable to find location!', undefined);
    } else {
      callback(undefined, {
        latitude:  response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      })
    }
  })
}

module.exports = geocode;