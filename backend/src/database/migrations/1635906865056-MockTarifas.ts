import { MigrationInterface, QueryRunner } from 'typeorm'

export class MockTarifas1635906865056 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		queryRunner.manager
			.createQueryBuilder()
			.insert()
			.into('tarifas')
			.values([
				{ origem: '011', destino: '016', valor: 1.9, ativo: true },
				{ origem: '011', destino: '017', valor: 1.7, ativo: true },
				{ origem: '011', destino: '018', valor: 0.9, ativo: true },
				{ origem: '016', destino: '011', valor: 2.9, ativo: true },
				{ origem: '017', destino: '011', valor: 2.5, ativo: true },
				{ origem: '018', destino: '011', valor: 1.9, ativo: true },
			])
			.execute()
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.manager.createQueryBuilder().delete().from('tarifas')
	}
}
