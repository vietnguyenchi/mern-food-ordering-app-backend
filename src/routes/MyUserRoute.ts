import express from 'express';
import {
	createCurrentUser,
	updateCurrentUser,
} from '../controllers/MyUserController';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateMyUserRequest } from '../middleware/vaidation';

const router = express.Router();

router.post('/', jwtCheck, createCurrentUser);
router.put('/', jwtCheck, jwtParse, validateMyUserRequest, updateCurrentUser);

export default router;
