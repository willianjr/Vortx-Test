import { Router } from 'express'

import PlanosController from '../../api/controllers/planosController'

const routes = Router()

/* ROUTES PLANOS -=> API/PLANOS */
routes.get('/count', PlanosController.count)
routes.get('/', PlanosController.getAll)
routes.get('/:id', PlanosController.getID)
routes.post('/', PlanosController.save)
routes.put('/:id', PlanosController.update)
routes.delete('/:id', PlanosController.delete)

export default routes
