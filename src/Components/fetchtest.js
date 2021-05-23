const https = require('https')

const API_KEY = '4cb192e459db0f503de68ecd35c8fde4'

const options = {
    hostname: 'api.openweathermap.org',
    port: 443,
    path: `/data/2.5/weather?lat=35&lon=139&appid=${API_KEY}`,
    method: 'GET'
}

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.end()




// fetch(`api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_KEY}`)
// .then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err)
// })