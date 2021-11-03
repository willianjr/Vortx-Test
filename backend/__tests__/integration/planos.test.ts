import { getConnection } from 'typeorm'
import request = require('supertest')
import Database from '../../src/database'

import { PlanosModel } from '../../src/api/models/planosModels'

describe('PlanosModel: Repositories in Banco de Dados', () => {
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
	test('Não deve inserir um novo plano se ele não tiver todos os campos obrigatórios', async () => {
		const planosRepository = getConnection().getRepository(PlanosModel)
		const plano = await planosRepository.create({
			nome: 'Plano Mais 30',
		})
		await expect(planosRepository.save(plano)).rejects.toThrow()
	})
	test('Deve inserir um novo plano', async () => {
		const planosRepository = getConnection().getRepository(PlanosModel)
		const plano = await planosRepository.create({
			nome: 'Plano Mais 30',
			franquia: 30,
			ativo: true,
		})
		const results = await planosRepository.save(plano)
		expect(plano.nome).toBe(results.nome)
	})
	//FIND

	test('Não deve receber um plano com id inválido', async () => {
		const id = '15sd4f'
		const planosRepository = getConnection().getRepository(PlanosModel)
		const results = await planosRepository.find({
			where: {
				_id: id,
			},
		})

		expect(results).toHaveLength(0)
	})
	test('Deve obter um plano com id', async () => {
		const planosRepository = getConnection().getRepository(PlanosModel)
		const plano = await planosRepository.create({
			nome: 'Plano Mais 30',
			franquia: 30,
			ativo: true,
		})
		const resultsSave = await planosRepository.save(plano)

		const id = resultsSave._id

		const results = await planosRepository.find({
			where: {
				_id: id,
			},
		})

		expect(results).toHaveLength(1)
	})

	//REMOVE

	test('Não deve remover um plano com id inválido ou nulo', async () => {
		const id = '15sd4f'
		const planosRepository = getConnection().getRepository(PlanosModel)
		const [, countBefore] = await planosRepository.findAndCount({ where: { _id: id } })
		const results = await planosRepository.delete(id)

		expect(countBefore).toBe(0)
	})
	test('Deve remover um plano com id válido', async () => {
		const planosRepository = getConnection().getRepository(PlanosModel)
		const plano = await planosRepository.create({
			nome: 'Plano Mais 30',
			franquia: 30,
			ativo: true,
		})
		const resultsSave = await planosRepository.save(plano)

		const id = resultsSave._id
		const [, countBefore] = await planosRepository.findAndCount({ where: { _id: id } })
		const results = await planosRepository.delete(id)
		const [, countAfter] = await planosRepository.findAndCount({ where: { _id: id } })

		expect(countBefore).toBe(1)
		expect(countAfter).toBe(0)
	})
})
