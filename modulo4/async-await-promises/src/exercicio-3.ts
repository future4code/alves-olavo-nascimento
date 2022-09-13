// Exercício 3

import axios from "axios";
import { BASE_URL } from "./constants";

type user = {
    id: string;
    name: string;
    email: string;
}

// a) Não, porque a a estrutura do type e a mesma do retorno.
// b) Acredito que sim, como a intenção do typescrip e ter tudo tipado, o correto e manter a tipagem necessária, 
// para evitar problemas futuros.
// c) 
const allSubscribers = async (): Promise<user[]> => {
    const subscribers = await axios.get(`${BASE_URL}/subscribers`)
    const typedSubscribers: user[] = subscribers.data.map((subs: any) => {
        return {
            id: subs.id,
            name: subs.name,
            email: subs.email
        }
    })
    return typedSubscribers
}

const main = async (): Promise<void> => {
    console.log(await allSubscribers())
}

main()    