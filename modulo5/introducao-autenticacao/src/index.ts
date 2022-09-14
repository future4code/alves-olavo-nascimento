import app from "./app"
import { Users } from "./endpoint/Users"

const user = new Users()

app.post('/user/signup', user.createUser)

app.post('/user/login', user.login)


