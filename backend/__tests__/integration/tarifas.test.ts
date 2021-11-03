import { getConnection } from 'typeorm'
import request = require('supertest')
import Database from '../../src/database'
import { TarifasModel } from '../../src/api/models/tarifasModels'

describe('TarifasModel: Repositories in Banco de Dados', () => {
	beforeAll(async () => {
		await Database.conect()
	})
	afterAll(async () => {
		await Database.close()
	})
	beforeEach(async () => {
		await Database.truncate()
	})
	// Testes de Repositórios
	// CREATE
	test('Não deve inserir uma nova tarifa se ela não tiver todos os campos obrigatórios', async () => {
		const tarifasRepository = getConnection().getRepository(TarifasModel)
		const tarifa = await tarifasRepository.create({
			origem: '011',
		})
		await expect(tarifasRepository.save(tarifa)).rejects.toThrow()
	})
	test('Deve inserir uma nova tarifa', async () => {
		const tarifasRepository = getConnection().getRepository(TarifasModel)
		const tarifa = await tarifasRepository.create({
			origem: '011',
			destino: '018',
			valor: 1.9,
			ativo: true,
		})
		const results = await tarifasRepository.save(tarifa)
		expect(tarifa.origem).toBe(results.origem)
	})
	//FIND

	test('Não deve receber uma tarifa com id inválido', async () => {
		const id = '15sd4f'
		const tarifasRepository = getConnection().getRepository(TarifasModel)
		const results = await tarifasRepository.find({
			where: {
				_id: id,
			},
		})

		expect(results).toHaveLength(0)
	})
	test('Deve obter uma tarifa com id', async () => {
		const tarifasRepository = getConnection().getRepository(TarifasModel)
		const tarifa = await tarifasRepository.create({
			origem: '011',
			destino: '018',
			valor: 1.9,
			ativo: true,
		})
		const resultsSave = await tarifasRepository.save(tarifa)

		const id = resultsSave._id

		const results = await tarifasRepository.find({
			where: {
				_id: id,
			},
		})

		expect(results).toHaveLength(1)
	})

	//REMOVE

	test('Não deve remover uma tarifa com id inválido ou nulo', async () => {
		const id = '15sd4f'
		const tarifasRepository = getConnection().getRepository(TarifasModel)
		const [, countBefore] = await tarifasRepository.findAndCount({ where: { _id: id } })
		const results = await tarifasRepository.delete(id)

		expect(countBefore).toBe(0)
	})
	test('Deve remover uma tarifa com id válido', async () => {
		const tarifasRepository = getConnection().getRepository(TarifasModel)
		const tarifa = await tarifasRepository.create({
			origem: '011',
			destino: '018',
			valor: 1.9,
			ativo: true,
		})
		const resultsSave = await tarifasRepository.save(tarifa)

		const id = resultsSave._id
		const [, countBefore] = await tarifasRepository.findAndCount({ where: { _id: id } })
		const results = await tarifasRepository.delete(id)
		const [, countAfter] = await tarifasRepository.findAndCount({ where: { _id: id } })

		expect(countBefore).toBe(1)
		expect(countAfter).toBe(0)
	})
})
