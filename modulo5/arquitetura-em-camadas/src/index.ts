import app from "./app";
import UserController from "./controller/UserController";

const userController = new UserController()

app.post("/user/signup", userController.signup)

app.post("/user/login", userController.login)

app.get("/user/all", userController.getAllUsers)

app.delete("/user/remove", userController.deleteUserById)


