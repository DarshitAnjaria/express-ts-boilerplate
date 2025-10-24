import express from "express";
import { createUser, getUsers } from "../controllers/user.controller";
import { validateRequest } from "../middleware/validation.middleware";
import { CreateUserDto } from "../dtos/user/create.user.dto";

const router = express.Router();

router.post("/", validateRequest(CreateUserDto), createUser);
router.get("/", getUsers);

export default router;
