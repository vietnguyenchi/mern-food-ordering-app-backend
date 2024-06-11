import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import myUserRoute from './routes/MyUserRoute';

mongoose
	.connect(process.env.MONGODB_CONNECTION_STRING as string)
	.then((): void => console.log('Connected to database'));

const app = express();

app.use(express.json());
app.use(cors());

app.get('/health', async (req: Request, res: Response) => {
	res.send({ message: 'Health OK!' });
});

app.use('/api/my/user', myUserRoute);

app.get('/test', async (req: Request, res: Response): Promise<void> => {
	res.json({ message: 'Hello!' });
});

app.listen(7000, (): void => console.log('Server is running on port 7000'));
