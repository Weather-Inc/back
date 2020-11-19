import * as dotenv from 'dotenv'

dotenv.config()

const WEATHER_URL = 'http://localhost:3200/api/v0'

const config = {
  dev: {
    weather_url: WEATHER_URL
  },

  prod: {
    weather_url: WEATHER_URL
  }
}

export default config
