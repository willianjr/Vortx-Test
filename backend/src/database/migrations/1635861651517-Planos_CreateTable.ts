import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class PlanosCreateTable1635861651517 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'planos',
				columns: [
					{
						name: '_id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'nome',
						type: 'varchar',
					},
					{
						name: 'franquia',
						type: 'integer',
					},
					{
						name: 'ativo',
						type: 'boolean',
					},
					{
						name: 'createdAt',
						type: 'datetime',
					},
					{
						name: 'updatedAt',
						type: 'datetime',
					},
				],
			}),
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('planos')
	}
}
