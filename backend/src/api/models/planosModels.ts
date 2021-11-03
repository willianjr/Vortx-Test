import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { IsBooleanString, IsNotEmpty, MaxLength, MinLength } from 'class-validator'

@Entity('planos')
export class PlanosModel {
	@PrimaryGeneratedColumn('uuid')
	_id: string

	@Column('varchar', { length: 50 })
	@MinLength(2, { message: 'Favor inserir no mínimo $constraint1 caracteres' })
	@MaxLength(50, { message: 'Favor inserir no máximo $constraint1 caracteres' })
	nome: string

	@Column()
	@MinLength(1, { message: 'Favor inserir no mínimo $constraint1 caracteres' })
	@MaxLength(3, { message: 'Favor inserir no máximo $constraint1 caracteres' })
	franquia: number

	@Column()
	@IsBooleanString({ message: 'Favor fornecer um valor boleano, "true" ou "false"' })
	ativo: boolean

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date
}
