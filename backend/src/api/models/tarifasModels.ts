import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { IsBooleanString, MaxLength, MinLength } from 'class-validator'

@Entity('tarifas')
export class TarifasModel {
	@PrimaryGeneratedColumn('uuid')
	_id: string

	@Column('varchar', { length: 50 })
	@MinLength(3, { message: 'Favor inserir no mínimo $constraint1 caracteres' })
	@MaxLength(4, { message: 'Favor inserir no máximo $constraint1 caracteres' })
	origem: string

	@Column('varchar', { length: 50 })
	@MinLength(3, { message: 'Favor inserir no mínimo $constraint1 caracteres' })
	@MaxLength(4, { message: 'Favor inserir no máximo $constraint1 caracteres' })
	destino: string

	@Column()
	@MinLength(2, { message: 'Favor inserir no mínimo $constraint1 caracteres' })
	@MaxLength(20, { message: 'Favor inserir no máximo $constraint1 caracteres' })
	valor: number

	@Column()
	@IsBooleanString({ message: 'Favor fornecer um valor boleano, "true" ou "false"' })
	ativo: boolean

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date
}
