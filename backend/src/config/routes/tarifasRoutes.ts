import { Router } from 'express'

import TarifasController from '../../api/controllers/tarifasController'

const routes = Router()
// routes.use('/api')
/* ROUTES PAPER -=> API/PAPER */
routes.get('/count', TarifasController.count)
routes.get('/', TarifasController.getAll)
routes.get('/origens', TarifasController.getOrigens)
routes.get('/destinos/:origem', TarifasController.getDestinos)
routes.get('/valor/:origem/:destino', TarifasController.getValorTarifa)
routes.get('/:id', TarifasController.getID)
routes.post('/', TarifasController.save)
routes.put('/:id', TarifasController.update)
routes.delete('/:id', TarifasController.delete)

export default routes
