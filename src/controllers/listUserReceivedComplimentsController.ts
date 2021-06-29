import { Request, Response } from "express"

import { ListUserReceivedComplimentsService } from "../services/listUserReceivedComplimentsService"

export class ListUserReceivedComplimentsController {
	async handle(req: Request, res: Response) {
		const { user_id } = req

		const listUserReceivedComplimentsService = new ListUserReceivedComplimentsService()

		const compliments = await listUserReceivedComplimentsService.execute(user_id)

		return res.json(compliments)
	}
}