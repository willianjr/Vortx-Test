import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class TarifasCreateTable1635860833308 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'tarifas',
				columns: [
					{
						name: '_id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'origem',
						type: 'varchar',
					},
					{
						name: 'destino',
						type: 'varchar',
					},
					{
						name: 'valor',
						type: 'float',
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
		await queryRunner.dropTable('tarifas')
	}
}
