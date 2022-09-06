import axios from "axios";
import { BASE_URL } from "./constants";
import { AddressType } from "./types";

const address = async (cepBody: string): Promise<AddressType> => {
    try {
        const adress = await axios.get(`${BASE_URL}/${cepBody}/json/`)

        let { cep, logradouro, complemento, bairro, localidade, uf, } = adress.data

        const addressUser: AddressType = { cep, logradouro, complemento, bairro, localidade, uf }

        return addressUser

    } catch (error) {
        throw new Error('Ocorreu um erro')
    }

}

export default address