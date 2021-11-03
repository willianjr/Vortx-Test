import { Request, Response } from 'express'
import { getConnection } from 'typeorm'
import { validateOrReject } from 'class-validator'
import { TarifasModel } from '../models/tarifasModels'
import { equal } from 'assert'

class TarifasController {
	public async getAll(req: Request, res: Response): Promise<Response> {
		try {
			const tarifasRepository = await getConnection().getRepository(TarifasModel)
			const [list, totalRegister] = await tarifasRepository.findAndCount()

			return res.status(200).json({ list, totalRegister })
		} catch (error) {
			return res.status(400).json({ message: error })
		}
	}
	public async getOrigens(req: Request, res: Response): Promise<Response> {
		try {
			const tarifasRepository = await getConnection().getRepository(TarifasModel)
			const list = await tarifasRepository.createQueryBuilder().select('origem').distinct(true).execute()

			return res.status(200).json({ list })
		} catch (error) {
			return res.status(400).json({ message: error })
		}
	}
	public async getDestinos(req: Request, res: Response): Promise<Response> {
		try {
			const { origem } = req.params
			console.log('ID', origem)
			const tarifasRepository = await getConnection().getRepository(TarifasModel)
			const list = await tarifasRepository
				.createQueryBuilder()
				.select('destino')
				.where({ origem: origem })
				.distinct(true)
				.execute()

			return res.status(200).json({ list })
		} catch (error) {
			return res.status(400).json({ message: error })
		}
	}
	public async getValorTarifa(req: Request, res: Response): Promise<Response> {
		try {
			const { origem, destino } = req.params
			console.log('ID', origem, destino)
			const tarifasRepository = await getConnection().getRepository(TarifasModel)
			const list = await tarifasRepository
				.createQueryBuilder()
				.select('valor')
				.where({ origem: origem, destino: destino })
				.getRawMany()

			return res.status(200).json(list)
		} catch (error) {
			return res.status(400).json({ message: error })
		}
	}

	public async getID(req: Request, res: Response): Promise<Response> {
		const { id } = req.params
		return res.json({ message: 'getID', id })
	}

	public async count(req: Request, res: Response): Promise<Response> {
		try {
			const tarifasRepository = await getConnection().getRepository(TarifasModel)
			const tarifass = await tarifasRepository.count()

			return res.status(200).json({ totalRegister: tarifass })
		} catch (error) {
			return res.status(400).json({ message: error })
		}
	}

	public async save(req: Request, res: Response): Promise<Response> {
		try {
			const tarifasRepository = getConnection().getRepository(TarifasModel)
			const tarifas = await tarifasRepository.create(req.body)
			await validateOrReject(tarifas).catch((errors) => {
				if (errors.length > 0) {
					throw errors
				}
			})
			// se passar pela validação ele salva o repositorio
			const results = await tarifasRepository.save(tarifas)
			return res.status(201).send(results)
		} catch (error) {
			return res.status(400).json({ message: error })
		}
	}

	public async update(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params
			const tarifasRepository = getConnection().getRepository(TarifasModel)
			console.log('update', req.body)
			const tarifas = (await tarifasRepository.findOne(id)) || new TarifasModel()
			tarifasRepository.merge(tarifas, req.body)
			// casos individuais
			tarifas.ativo = Boolean(req.body.active)
			const results = await tarifasRepository.save(tarifas)
			return res.status(200).send(results)
		} catch (error) {
			return res.status(400).json({ message: error })
		}
	}

	public async delete(req: Request, res: Response): Promise<Response> {
		const { id } = req.params
		const tarifasRepository = getConnection().getRepository(TarifasModel)
		const results = await tarifasRepository.delete(id)
		return res.json(results)
	}
}

export default new TarifasController()
