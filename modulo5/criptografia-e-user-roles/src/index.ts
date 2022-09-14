import app from "./app";
import { UserData } from "./data/UserData";
import { Users } from "./endpoints/Users";

// const userData = new UserData()
const user = new Users()

app.post('/user/signup', user.createUser)

app.post('/user/login', user.login)

