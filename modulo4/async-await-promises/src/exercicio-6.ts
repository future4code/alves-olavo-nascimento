import axios from "axios"
import { BASE_URL } from "./constants"
import { allSubscribersArrow } from "./exercicio-2";

type user = {
    id: string;
    name: string;
    email: string;
}

const sendNotification = async (ids: string[]): Promise<void> => {
    try {
        const requests = ids.map(id =>
            axios.post(`${BASE_URL}/notifications`, {
                subscriberId: id,
                message: "Corre que tem fofoca nova. 🏃"
            }))

        console.log('Promise.all', await Promise.all(requests))
        console.log('Todas as notificão foram enviadas')
    } catch (error) {
        console.log('Ocorreu um erro')           // Essa nãop consegui fazer rodar, não encontrei o erro.
    }
}

const main = async (): Promise<void> => {
    try {
        const subscribers: user[] = await allSubscribersArrow()
        const ids = subscribers.map((subs) => subs.id)
        await sendNotification(ids)

        console.log('Envado para todos.')
    } catch (error) {
        console.log('Ocorreu um erro.')
    }
}

main()