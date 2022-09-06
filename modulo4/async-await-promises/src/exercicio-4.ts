import axios from "axios"
import { BASE_URL } from "./constants"

// a) Void, não retrona nada.
// b)
const createNews = async (title: string, content: string, date: number): Promise<void> => {
    await axios.put(`${BASE_URL}/news`, {
        title: title,
        content: content,
        date: date
    })
        .then((res) => { console.log('res=', res) })
        .catch((error) => { console.log(error) })


    return
}

const main = async (): Promise<any> => {
    const title = 'Mundo Bita da Livia'
    const content = 'Decorei tudo já'
    const date = Date.now()
    console.log(await createNews(title, content, date))
}


main()
