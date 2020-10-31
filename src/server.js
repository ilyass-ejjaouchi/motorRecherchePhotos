const express = require('express');
const path = require('path');
const axios = require('axios');

// Loads env variables
require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 3001;

// Adds json parsing middleware
app.use(express.json());

// Setup static directory to serve
app.use(express.static(path.resolve('client', 'build')));

// Creates weather endpoint
app.post('/weather', async (req, res) => {
    const { location } = req.body

    // Encode the variable so we can send the location in a URL
    const encodedLocation = encodeURIComponent(location)

    try {
        // Call the Weather API
        const { data } = await axios({
            method: "GET",
            url: `https://aerisweather1.p.rapidapi.com/observations/${encodedLocation}`,
            headers: {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "aerisweather1.p.rapidapi.com",
                "x-rapidapi-key": process.env.RAPIDAPI_KEY,
                "useQueryString": true
            }
        })

        // Pull the information that we need from the Weather API response
        const weatherData = {
            conditions: data.response.ob.weather,
            tempC: data.response.ob.tempC,
            tempF: data.response.ob.tempF
        }

        // Return the data object
        return res.send(weatherData)
    } catch (e) {
        console.log(e)

        return res.status(500).send('Error.')
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
});

// console.log that your server is up and running
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));