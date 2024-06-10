import { Request, Response } from 'express';
import User from '../models/user';

export const createCurrentUser = async (req: Request, res: Response) => {
	try {
		const { auth0Id } = req.body;
		const existingUser = await User.findOne({ auth0Id });

		if (existingUser) {
			return res.status(200).send();
		}

		const newUser = await User.create(req.body);
		res.status(201).json(newUser.toObject());
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error creating user' });
	}
};

export const updateCurrentUser = async (req: Request, res: Response) => {
	try {
		const { name, addressLine1, country, city } = req.body;
		const user = await User.findByIdAndUpdate(
			req.userId,
			{ name, addressLine1, country, city },
			{ new: true }
		);

		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		res.send(user);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error updating user' });
	}
};
