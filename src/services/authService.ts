import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

import { UsersRepositories } from "../repositories/UsersRepositories"

interface IAuthRequest {
	email: string;
	password: string
}

export class AuthService {
	async execute({ email, password }: IAuthRequest) {
		const usersRepository = getCustomRepository(UsersRepositories)
		
		const user = await usersRepository.findOne({ email })

		if (!user) {
			throw new Error("Email/Password incorrect!")
		}

		const isPasswordCorrect = await compare(password, user.password)

		if (!isPasswordCorrect) {
			throw new Error("Email/Password incorrect!")	
		}

		const token = sign(
			{
				email: user.email
			}, 
				process.env.JWT_SECRET_KEY,
			{
				subject: user.id,
				expiresIn: "1d"
			}
		)

		return token
	}
}