import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuidv4 } from 'uuid'
import { Exclude } from "class-transformer"

@Entity("users")

export class User {
	@PrimaryColumn()
	readonly id: string;

	@Column()
	name: string;
	
	@Column()
	email: string;

	@Exclude()
	@Column()
	password: string;
	
	@Column()
	admin: boolean;
	
	@CreateDateColumn()
	created_at: Date;
	
	@CreateDateColumn()
	updated_at: Date;

	constructor() {
		if (!this.id) {
			this.id = uuidv4()
		}
	}
}
