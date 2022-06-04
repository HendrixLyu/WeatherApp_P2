const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    apikey: process.env.OPEN_Weather_APIKey,
}

