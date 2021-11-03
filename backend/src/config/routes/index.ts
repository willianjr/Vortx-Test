import { Router } from 'express'

import PlanosRoutes from './planosRoutes'
import TarifasRoutes from './tarifasRoutes'

const routes = Router()

routes.use('/Planos', PlanosRoutes)
routes.use('/Tarifas', TarifasRoutes)

export default routes
