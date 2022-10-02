import { IIdsTicketDTO, IOutputTicketDTO, ITicketInputDTO, Ticket } from "../model/Ticket"
import { TokenNotInformed } from "../error/TokenNotInformed"
import { TicketDataBase } from "../dataBase/TicketDataBase"
import { Authenticator } from "../service/Authenticator"
import { UserDataBase } from "../dataBase/UserDataBase"
import { ShowDataBase } from "../dataBase/ShowDataBase"
import { GenerateId } from "../service/GenerateId"
import { AlreadyBought } from "../error/AlreadyBought"

export class TicketBusiness {
    constructor(
        private ticketDataBase: TicketDataBase,
        private authenticator: Authenticator,
        private showDataBase: ShowDataBase,
        private userDataBase: UserDataBase,
        private generateId: GenerateId,
    ) { }

    public ticket = async (input: ITicketInputDTO) => {
        console.log("entrou em ticket na TicketBusiness")

        const { token, idShow } = input
        if (!token) {
            throw new TokenNotInformed()
        }

        const payload = this.authenticator.verifyToken(token)

        const ids: IIdsTicketDTO = {
            idShow: idShow,
            idUser: payload.id
        }

        const alreadyBought = await this.ticketDataBase.userAlreadyBought(ids)
        
        console.log("1")
        console.log("alreadyBought",alreadyBought)
        
        console.log("2")
        if (alreadyBought) {
            throw new AlreadyBought()
        }
        
        const maximumAmount = await this.ticketDataBase.maximumAmount(idShow)
        console.log(maximumAmount)
        const idTicket = this.generateId.generateId()
        
        const newTicket = new Ticket(idTicket, idShow, payload.id)
        
        await this.ticketDataBase.bookTicket(newTicket)
        
        const showDataBase = await this.showDataBase.selectShowsById(idShow)
        
        const dateDataBase = showDataBase.starts_at
        
        const dateFormateLocal = dateDataBase.toLocaleDateString().split("/").join("-")
        
        const response: IOutputTicketDTO = {
            message: `Você reservou um ingresso para o evento da banda ${showDataBase.band} para o dia ${dateFormateLocal}, agradescemos sua reserva.`
        }
        
        return response
    }
}