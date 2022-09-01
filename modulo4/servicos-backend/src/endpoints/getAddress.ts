import { Request, Response } from 'express'
import address from '../data/adress'
import { connection } from '../data/connection'

const getAddess = async (req: Request, res: Response): Promise<any> => {
    try {
        const cepBody: string = req.body.cep
        const logradouro: string = req.body.logradouro
        const numero: string = req.body.numero
        const complemento: string = req.body.complemento
        const bairro: string = req.body.bairro

        if (!cepBody) {
            res.statusCode = 401
            throw new Error('Erro, Insira o cep.')
        }

        const adressUser = await address(cepBody)

        const CEP = adressUser.cep
        const Logradouro = adressUser.logradouro ? adressUser.logradouro : logradouro
        const Número = numero
        const Complemento = complemento ? complemento : ""
        const Bairro = adressUser.bairro ? adressUser.bairro : bairro
        const Cidade = adressUser.localidade
        const Estado = adressUser.uf

        const addressInfo = {
            CEP,
            Logradouro,
            Número,
            Complemento,
            Bairro,
            Cidade,
            Estado
        }

        await connection("Address_Users").insert(addressInfo)
        
        res.status(200).send('Endereço salvo com sucesso!')
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ error: error.message })
    }
}

export default getAddess


