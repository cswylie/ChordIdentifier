import express from 'express';
import { identifyController } from './controller'; // path to your controller

const router = express.Router();

router.post('/', identifyController);

export default router;