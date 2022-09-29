import express from "express";
import cors from "cors";
import { userRouter } from "./router/router";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log('Server rodando...')
})




app.use('/user', userRouter)