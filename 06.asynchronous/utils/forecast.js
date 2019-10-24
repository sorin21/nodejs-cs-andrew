const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const urlDarkSky = `https://api.darksky.net/forecast/9efc659feea9c30e3c680c360bcd9e9f/${ latitude },${ longitude }?units=si&lang=ro`

  request({ url: urlDarkSky, json: true }, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(data.currently)
    if (error) {
      callback('Unable to connect to weather service!');
    } else if (response.body.error) {
      callback('Unable to find location!');
    } else {
      callback(undefined, {
        summary: response.body.daily.data[0].summary,
        temperature: response.body.currently.temperature,
        precipProbability: response.body.currently.precipProbability
      })
    }
  })
}

module.exports = forecast;