import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
	sub: string
}

export const auth = (req: Request, res: Response, next: NextFunction ) => {
	const authToken = req.headers.authorization

	if (!authToken) {
		return res.status(401).end()
	}
    
    // Gets just the second value from array and ignore the first one (Remove "Bearer")
	const [,token] = authToken.split(" ")

	try {
		const { sub } = verify(token, process.env.JWT_SECRET_KEY) as IPayload;

		req.user_id = sub;

		return next()
	} catch(error) {
		return res.status(401).end()	
	}

}