import axios from "axios"
import { BASE_URL } from "./constants"
import { allSubscribersArrow } from "./exercicio-2";

type user = {
    id: string;
    name: string;
    email: string;
}

const sendNotification = async (subscribers: user[], message: string): Promise<void> => {
    try {
        for (const user of subscribers) {
            await axios.post(`${BASE_URL}/notifications`, {
                subscriberId: user.id,
                message: message
            });
        }
        console.log('Todas as notificão foram enviadas')
    } catch {
        console.log('Ocorreu um erro')
    }
}

const main = async (): Promise<void> => {
    const subscribers: user[] = await allSubscribersArrow()
    const message = "Notícia nova, corre lá e confira já!zzz"
    console.log(subscribers)
    console.log(await sendNotification(subscribers, message))
}

main()