import express from "express"
import cors from 'cors'
import { getAllUsers } from "./endpoint/getAllUsers";
import  {getAllUsersAllType} from "./endpoint/getAllUsersAllTypes";
import { getAllUsersByOrder } from "./endpoint/getAllUsersByOrder";
import selectUsersPagination from "./data/selectUsersPagination";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => console.log('Server is running in http://localhost:3003'))

app.get('/pagination', selectUsersPagination)

app.get('/users', getAllUsers)

app.get('/users/order', getAllUsersByOrder)

app.get('/users/:type', getAllUsersAllType)



