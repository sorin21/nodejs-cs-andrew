const request = require('request')
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// const urlDarkSky = 'https://api.darksky.net/forecast/9efc659feea9c30e3c680c360bcd9e9f/44.4323,26.1063?units=si&lang=ro'
// const urlMapBox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic29yaW4yMXVzIiwiYSI6ImNrMDljYjMwazA2cGUzam51bXAwOW84bTkifQ.hrJdXEgL8WSeqtQIU0HnlA&limit=0'

// request({ url: urlDarkSky, json: true }, (error, response) => {
//   // const data = JSON.parse(response.body)
//   // console.log(data.currently)
//   if(error) {
//     console.log('Unable to connect to weather service!');
//   } else if (response.body.error) {
//     console.log('Unable to find location!');
//   } else {
//     console.log(response.body.daily.data[0].summary + ' It is currently: ' + response.body.currently.temperature + ' and chance of rain: ' + response.body.currently.precipProbability)

//   }
// })

// request({ url: urlMapBox, json: true }, (error, response) => {
//   // const data = JSON.parse(response.body)
//   // console.log(data.currently)
//   if(error) {
//     console.log('Unable to connect to weather service!');
//   } else if (response.body.features.length === 0) {
//     console.log('Unable to find location!');
//   } else {
//     console.log('Latitude: ' + response.body.features[0].center[1] + ' and Longitude: ' + response.body.features[0].center[0])
//   }
// })

// encodeURIComponent will return a string good to be placed in url
// so this function will work if we have a search name with special characters like ?
// so we can used address without encodeURIComponent if the city doesn't contain special characters




// regullary a callback works like this: we get an error if don't work or data if works
const address = process.argv[2]

if (!address) {
  console.log('Please provide an address')
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
      if (error) {
          return console.log(error)
      }

      forecast(latitude, longitude, (error, forecastData) => {
          if (error) {
              return console.log(error)
          }

          console.log(location)
          console.log(forecastData)
      })
  })
}
