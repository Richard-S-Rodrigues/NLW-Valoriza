import { Request, Response } from 'express'
import { CreateUserService } from '../services/createUserService'

export class CreateUserController {

	async handle(req: Request, res: Response) {
		const { name, email, admin } = req.body

		try {
			const createUserService = new CreateUserService()

			const user = await createUserService.execute({ name, email, admin })

			return res.json(user)

		} catch(error) {
			console.log(error)
			return res.status(error.statusCode || 500).json({ message: error.message })
		}
	}
}