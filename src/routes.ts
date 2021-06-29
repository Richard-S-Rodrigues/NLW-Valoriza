import { Router } from "express";
import { CreateUserController } from "./controllers/createUserController";
import { CreateTagController } from "./controllers/createTagController";
import { AuthController } from "./controllers/authController";
import { CreateComplimentController } from "./controllers/createComplimentController";
import { ListUserReceivedComplimentsController } from "./controllers/listUserReceivedComplimentsController";
import { ListUserSendedComplimentsController } from "./controllers/listUserSendedComplimentsController";
import { ListTagsController } from "./controllers/listTagsController";
import { ListUsersController } from "./controllers/listUsersController";
import { auth } from "./middlewares/auth";
import isAdmin from "./middlewares/isAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authController = new AuthController()
const createComplimentController = new CreateComplimentController()
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController()
const listUserSendedComplimentsController = new ListUserSendedComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

router.post("/users", createUserController.handle);
router.get("/users", auth, listUsersController.handle)
router.post("/tags", auth, isAdmin, createTagController.handle);
router.get("/tags", auth, listTagsController.handle)
router.post("/login", authController.handle);
router.post("/compliments", auth, createComplimentController.handle)
router.get("/users/compliments/receive", auth, listUserReceivedComplimentsController.handle)
router.get("/users/compliments/send", auth, listUserSendedComplimentsController.handle)

export { router }