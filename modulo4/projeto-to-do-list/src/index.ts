import express from "express"
import cors from 'cors'
import reqCreatTask from "./endpoints/reqCreatTask";
import reqCreatUser from "./endpoints/reqCreatUser";
import reqEditUserId from "./endpoints/reqEditUserId";
import reqGetTaskId from "./endpoints/reqGetTaskId";
import reqGetUserId from "./endpoints/reqGetUserId";
import reqGetAllUsers from "./endpoints/reqGetAllUsers";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => console.log('Server is running in http://localhost:3003'))

app.get("/user/all", reqGetAllUsers)

app.get("/user/:id", reqGetUserId)

app.get("/task/:id", reqGetTaskId)

app.post("/user", reqCreatUser)

app.post("/task", reqCreatTask)

app.put("/user/edit/:id", reqEditUserId)