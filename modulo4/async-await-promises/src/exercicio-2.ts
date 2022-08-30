import axios from "axios"
import { BASE_URL } from "./constants"

// Exercício 2
// a) Na verdade fiz arrow function na primeira questão mas acredito que a única mudança
// seria onde o async na nomeada vem antes de function e na arrow depois da atribuição.
// Foi o que notei.


// b) 
export const allSubscribersArrow = async (): Promise<any[]> => {
    const subscribers = await axios.get(`${BASE_URL}/subscribers`)
    return subscribers.data
}

const main = async (): Promise<void> => {
    console.log(await allSubscribersArrow()) 
}

main()  //😅