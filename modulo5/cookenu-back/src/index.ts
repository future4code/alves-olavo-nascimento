import app from "./app";
import { User } from "./endpoints/User";

const user = new User()

app.post('/signup', user.signup)

app.post('/login', user.login)