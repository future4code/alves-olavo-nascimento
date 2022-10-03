import { IDeleteTicketInputDTO, IIdsTicketDTO, IOutputDeleteTicketDTO, IOutputTicketDTO, ITicketInputDTO, Ticket } from "../model/Ticket"
import { ThereAreNoReservations } from "../error/ThereAreNoReservations"
import { AuthenticationError } from "../error/AuthenticationError"
import { TokenNotInformed } from "../error/TokenNotInformed"
import { TicketDataBase } from "../dataBase/TicketDataBase"
import { Authenticator } from "../service/Authenticator"
import { UserDataBase } from "../dataBase/UserDataBase"
import { ShowDataBase } from "../dataBase/ShowDataBase"
import { AlreadyBought } from "../error/AlreadyBought"
import { ShowNotFound } from "../error/ShowNotFound"
import { GenerateId } from "../service/GenerateId"

export class TicketBusiness {
    constructor(
        private ticketDataBase: TicketDataBase,
        private authenticator: Authenticator,
        private showDataBase: ShowDataBase,
        private userDataBase: UserDataBase,
        private generateId: GenerateId,
    ) { }

    public ticket = async (input: ITicketInputDTO) => {

        const { token, idShow } = input
        if (!token) {
            throw new TokenNotInformed()
        }

        const payload = this.authenticator.verifyToken(token)
        
        if (!payload) {
            throw new AuthenticationError()
        }

        const ids: IIdsTicketDTO = {
            idShow: idShow,
            idUser: payload.id
        }

        const alreadyBought = await this.ticketDataBase.userAlreadyBought(ids)

        if (alreadyBought) {
            throw new AlreadyBought()
        }

        const idTicket = this.generateId.generateId()

        const newTicket = new Ticket(idTicket, idShow, payload.id)

        await this.ticketDataBase.bookTicket(newTicket)

        const showDataBase = await this.showDataBase.selectShowsById(idShow)

        if (!showDataBase) {
            throw new ShowNotFound()
        }

        const dateDataBase = showDataBase.starts_at

        const dateFormateLocal = dateDataBase.toLocaleDateString().split("/").join("-")

        const response: IOutputTicketDTO = {
            message: `Você reservou um ingresso para o evento da banda ${showDataBase.band} para o dia ${dateFormateLocal}, agradescemos sua reserva.`
        }

        return response
    }

    public deleteTicket = async (input: IDeleteTicketInputDTO) => {

        const { token, idShow } = input
        if (!token) {
            throw new TokenNotInformed()
        }

        const payload = this.authenticator.verifyToken(token)

        if (!payload) {
            throw new AuthenticationError()
        }
        
        const ids: IIdsTicketDTO = {
            idShow: idShow,
            idUser: payload.id
        }


        const reservationExist = await this.ticketDataBase.userAlreadyBought(ids)

        if (reservationExist === undefined) {
            throw new ThereAreNoReservations()
        }

        await this.ticketDataBase.removeTicket(ids)

        const showDataBase = await this.showDataBase.selectShowsById(idShow)

        if (!showDataBase) {
            throw new ShowNotFound()
        }

        const dateDataBase = showDataBase.starts_at

        const dateFormateLocal = dateDataBase.toLocaleDateString().split("/").join("-")

        const response: IOutputDeleteTicketDTO = {
            message: `Você deletou a reserva do show da banda ${showDataBase.band} do dia ${dateFormateLocal}, ficaremos feliz caso mude de ideia.`
        }

        return response
    }
}