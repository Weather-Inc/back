// Third party modules
import { Router } from 'express'

// Routes
import WeatherRouter from './weather/routes/weather.router'

// Private variables
const router: Router = Router()

// Weather routes
router.use('/weather', WeatherRouter)

export default router
