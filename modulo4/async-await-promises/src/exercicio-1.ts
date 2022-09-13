import axios from "axios"
import { BASE_URL } from "./constants"

const allSubscribers = async (): Promise<any[]> => {
    const subscribers = await axios.get(`${BASE_URL}/subscribers`)
    return subscribers.data
}

const main = async (): Promise<void> => {
    console.log(await allSubscribers())
}

main()

