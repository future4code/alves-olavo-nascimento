import app from "./app";
import { User } from "./endpoints/User";

const user = new User()

app.get('/profile', user.profile)

app.get('/user/:id', user.getUserById)

app.post('/signup', user.signup)

app.post('/login', user.login)

app.post('/recipe', user.createRecipe)