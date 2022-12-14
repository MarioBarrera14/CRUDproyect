import { Router } from "express";
import UserController from "./controllers/UserController";

const router = Router();

const userController = new UserController();

router.get("/", userController.handleListUsersController.bind(userController));

router.get("/add", (request, response) => {
  response.render("add");
});

router.post("/add-user", userController.handleUserController.bind(userController));

router.get("/search", userController.handleSearchUserController.bind(userController));

router.get("/edit", userController.handleGetUserDataController.bind(userController));

router.post("/edit-user", userController.handleUpdateUserController.bind(userController));

router.post("/delete-user", userController.handleDeleteUserService.bind(userController));

export { router };