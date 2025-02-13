import { Router } from "express";
const router = Router();

import UserController from "../controller/user.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import userController from "../controller/user.controller.js";

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.post('/refresh', UserController.refresh)
router.get('/users', authMiddleware, UserController.getUsers);
router.get('/user/:id', authMiddleware, UserController.getOneUser);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);
router.get('/checkAuth', authMiddleware, UserController.checkAuth);

export default router;