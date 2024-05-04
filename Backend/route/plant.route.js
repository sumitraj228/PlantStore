import express from 'express';
import { getPlant } from '../controller/plant.controller.js';

const router =express.Router();

router.get("/",getPlant);

export default router;