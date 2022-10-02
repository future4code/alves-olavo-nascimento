import { IIdsTicketDTO, IInputDataBaseDTO, Ticket } from "../model/Ticket";
import BaseDataBase from "./BaseDataBase";

export class TicketDataBase extends BaseDataBase {
    private static TABLE_TICKETS = "lama_Tickets"

    private ticketModelDataBAse = async (ticket: Ticket) => {
        console.log("entrou em ticketModelDataBAse na TicketDataBase")

        const ticketDataBAse: IInputDataBaseDTO = {
            id: ticket.getId(),
            show_id: ticket.getShowId(),
            user_id: ticket.getUserId()
        }

        return ticketDataBAse
    }

    public bookTicket = async (ticket: Ticket) => {
        console.log("entrou em bookTicket na TicketDataBase")

        const newTicket = await this.ticketModelDataBAse(ticket)
        const tableTickets = TicketDataBase.TABLE_TICKETS

        await this.getConnection()
            .insert(newTicket)
            .into(tableTickets)
    }

    public userAlreadyBought = async (ids: IIdsTicketDTO) => {
        console.log("entrou em userAlreadyBought na TicketDataBase")
        console.log("idShow", ids.idShow)
        console.log("idUser", ids.idUser)

        const tableTickets = TicketDataBase.TABLE_TICKETS

        const showFound = await this.getConnection()
            .select("*")
            .from(tableTickets)
            .where({ show_id: ids.idShow, user_id: ids.idUser })

        return showFound[0]
    }

    public maximumAmount = async (idShow: string) => {
        console.log("entrou em maximumAmount na TicketDataBase")

        const tableTickets = TicketDataBase.TABLE_TICKETS

        const showFound = await this.getConnection()

            .from(tableTickets)
            .count('id AS count')
            .where({ show_id: idShow })

        // console.log("showFound[0]", showFound[0])
        // console.log("showFound", showFound)
        return showFound[0].count as number
    }
}