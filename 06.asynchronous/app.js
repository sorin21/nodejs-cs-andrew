const request = require('request')

const url = 'https://api.darksky.net/forecast/9efc659feea9c30e3c680c360bcd9e9f/37.8267,-122.4233'

request({ url, json: true }, (error, response) => {
  // const data = JSON.parse(response.body)
  // console.log(data.currently)
  console.log(response.body.currently)
})