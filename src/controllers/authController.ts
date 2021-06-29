import { Request, Response } from "express"

import { AuthService } from "../services/authService"

export class AuthController {
	async handle(req: Request, res: Response) {
		const { email, password } = req.body
		
		const authService = new AuthService()

		const token = await authService.execute({
			email,
			password
		})

		return res.json(token)
	}
}