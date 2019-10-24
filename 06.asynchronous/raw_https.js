const https = require('https')
const url = 'https://api.darksky.net/forecast/9efc659feea9c30e3c680c360bcd9e9f/40,-75'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

// this will fire the request
request.end()