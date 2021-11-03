import { Request, Response } from 'express'
import { getConnection } from 'typeorm'
import { validateOrReject } from 'class-validator'
import { PlanosModel } from '../models/planosModels'

class PlanosController {
	public async getAll(req: Request, res: Response): Promise<Response> {
		try {
			const planosRepository = await getConnection().getRepository(PlanosModel)
			const [list, totalRegister] = await planosRepository.findAndCount()

			return res.status(200).json({ list, totalRegister })
		} catch (error) {
			return res.status(400).json({ message: error })
		}
	}

	public async getID(req: Request, res: Response): Promise<Response> {
		const { id } = req.params
		try {
			const planosRepository = await getConnection().getRepository(PlanosModel)
			const list = await planosRepository.createQueryBuilder().select().where({ _id: id }).execute()

			return res.status(200).json(list)
		} catch (error) {
			return res.status(400).json({ message: error })
		}
	}

	public async count(req: Request, res: Response): Promise<Response> {
		try {
			const planosRepository = await getConnection().getRepository(PlanosModel)
			const planos = await planosRepository.count()

			return res.status(200).json({ totalRegister: planos })
		} catch (error) {
			return res.status(400).json({ message: error })
		}
	}

	public async save(req: Request, res: Response): Promise<Response> {
		try {
			const planosRepository = getConnection().getRepository(PlanosModel)
			console.log(req.body)
			const planos = await planosRepository.create(req.body)
			await validateOrReject(planos).catch((errors) => {
				if (errors.length > 0) {
					throw errors
				}
			})
			// se passar pela validação ele salva o repositorio
			const results = await planosRepository.save(planos)
			return res.status(201).send(results)
		} catch (error) {
			return res.status(400).json({ message: error })
		}
	}

	public async update(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params
			const planosRepository = getConnection().getRepository(PlanosModel)
			console.log('update', req.body)
			const planos = await planosRepository.findOne(id)
			planosRepository.merge(planos, req.body)
			// casos individuais
			planos.ativo = Boolean(req.body.active)
			const results = await planosRepository.save(planos)
			return res.status(200).send(results)
		} catch (error) {
			return res.status(400).json({ message: error })
		}
	}

	public async delete(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params
			const planosRepository = getConnection().getRepository(PlanosModel)
			const [, countBefore] = await planosRepository.findAndCount({ where: { _id: id } })
			if (countBefore <= 0) {
				throw new Error()
			}
			if (countBefore > 0) {
				const results = await planosRepository.delete(id)

				const [, countAfter] = await planosRepository.findAndCount({ where: { _id: id } })
				const affected = countBefore > countAfter ? 1 : 0

				return res.status(200).json({ affected })
			}
		} catch (error) {
			return res.status(400).json({ message: error })
		}
	}
}

export default new PlanosController()
