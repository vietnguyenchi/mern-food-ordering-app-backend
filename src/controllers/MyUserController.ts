import { Request, Response } from 'express';
import User from '../models/user';

export const createCurrentUser = async (req: Request, res: Response) => {
	try {
		const { auth0Id } = req.body;
		const existingUser = await User.findOne({ auth0Id });

		if (existingUser) {
			return res.status(400).json({ message: 'User already exists' });
		}

		const newUser = await User.create(req.body);
		res.status(201).json(newUser.toObject());
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error creating user' });
	}
};
