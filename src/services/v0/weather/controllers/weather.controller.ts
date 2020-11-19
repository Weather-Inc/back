// Third party modules
import { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'

// Private modules
import config from '../../../../config/config'

// Private variables
const c = process.env.production ? config.prod : config.dev
const weatherUrl = c.weather_url

// Request an access token
export const getToken = async (req: Request, res: Response) => {
  try {
    const response: AxiosResponse = await axios.get(`${weatherUrl}/auth`)

    return res.send(response.data)
  } catch (error: any) {
    const errorCode = error?.response?.status || 500

    return res.status(errorCode).send(error)
  }
}

// Retrieve weather data by geolocation
export const getDefaultWeatherData = async (req: Request, res: Response) => {
  try {
    const response: AxiosResponse = await axios.post(weatherUrl, req.body)

    return res.send(response.data)
  } catch (error: any) {
    const errorCode = error?.response?.status || 500

    return res.status(errorCode).send(error)
  }
}

// Retrieve weather data by geolocation for specific date
export const getWeatherDataForDate = async (req: Request, res: Response) => {
  try {
    const response: AxiosResponse = await axios.post(`${weatherUrl}/single-date`, req.body)

    return res.send(response.data)
  } catch (error: any) {
    const errorCode = error?.response?.status || 500

    return res.status(errorCode).send(error)
  }
}

// Retrieve weather data by geolocation for date range
export const getWeatherDataForRange = async (req: Request, res: Response) => {
  try {
    const response: AxiosResponse = await axios.post(`${weatherUrl}/date-range`, req.body)

    return res.send(response.data)
  } catch (error: any) {
    const errorCode = error?.response?.status || 500

    return res.status(errorCode).send(error)
  }
}
