
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
var data

/*const url = "http://api.weatherstack.com/current?access_key=735999daa42df26aa5f502409a63ef73&query=80,80"

request({url: url, json: true}, (error, response) => {
    
    //const data = JSON.parse(response.body)
    //const dataJSON = data.parse(response.body)
    console.log(response.body.current.observation_time)
})
*/

const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Pune.json?access_token=pk.eyJ1IjoiYS1wYXJ1bDIwIiwiYSI6ImNrYW01eHh5NDExOHAyeWp1bXB6MjgzcWwifQ.Fhp_Y7iLmwaGM1tknsAIpg"
var lat
var lon
var summary
//console.log (process.argv[2])

geocode('Jaipur', (data) => {
    const url = 'http://api.weatherstack.com/current?access_key=735999daa42df26aa5f502409a63ef73&query=' + lat + ',' + lon
    console.log (url)

    forecast(data.lat, data.lon, (summary) => {
        console.log ('Main: ' + summary)
    })
})



