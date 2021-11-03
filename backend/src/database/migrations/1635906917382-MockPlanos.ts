import { MigrationInterface, QueryRunner } from 'typeorm'

export class MockPlanos1635906917382 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		queryRunner.manager
			.createQueryBuilder()
			.insert()
			.into('planos')
			.values([
				{ nome: 'Plano Mais 30', franquia: 30, ativo: true },
				{ nome: 'Plano Mais 60', franquia: 60, ativo: true },
				{ nome: 'Plano Mais 120', franquia: 120, ativo: true },
			])
			.execute()
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.manager.createQueryBuilder().delete().from('planos')
	}
}
