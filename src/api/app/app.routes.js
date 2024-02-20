import { Router } from 'express';
import appController from './app.controller.js';

const router = Router();

router.get('/', appController.showGreeting);

router.get('/config', appController.getConfig);

export const appRoute = router;
