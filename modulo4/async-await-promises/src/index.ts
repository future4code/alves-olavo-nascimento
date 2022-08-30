import express from "express";
import cors from "cors";
import axios from "axios";
import { BASE_URL } from "./constants";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
    console.log(`Server is running in http://localhost:`)
})
// // Exercício 1
// // a) GET
// // b) Promise
// // c) Promise

// const allSubscribers = async (): Promise<any[]> => {
//     const subscribers = await axios.get(`${BASE_URL}/subscribers`)
//     // console.log(subscribers.data)
//     return subscribers.data
// }
// console.log(allSubscribers())

//===============//===============//================//==================//

// // Exercício 2
// // a) Na verdade fiz arrow function na primeira questão mas acredito que a única mudança
// // seria onde o async na nomeada vem antes de function e na arrow depois da atribuição.
// // Foi o que notei.

// // b) 
// const allSubscribersArrow = async (): Promise<any[]> => {
//     const subscribers = await axios.get(`${BASE_URL}/subscribers`)
//     // console.log(subscribers.data)
//     return subscribers.data
// }
// console.log(allSubscribersArrow())  //😅

// // Exercício 3

// type user = {
//     id: string;
//     name: string;
//     email: string;
// }

// // a) Não, porque a a estrutura do type e a mesma do retorno.
// // b) Acredito que sim, como a intenção do typescrip e ter tudo tipado, o correto e manter a tipagem necessária.
// // c) 
// const allSubscribersType = async (): Promise<user[]> => {
//     const subscribers = await axios.get(`${BASE_URL}/subscribers`)
//     // console.log(subscribers.data)
//     return subscribers.data
// }
// console.log(allSubscribersType())  //😅

