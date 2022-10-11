import {  IIdsTicketDTO, IInputDataBaseDTO, Ticket } from "../model/Ticket";
import BaseDataBase from "./BaseDataBase";

export class TicketDataBase extends BaseDataBase {
    private static TABLE_TICKETS = "lama_Tickets"

    private ticketModelDataBAse = async (ticket: Ticket) => {

        const ticketDataBAse: IInputDataBaseDTO = {
            id: ticket.getId(),
            show_id: ticket.getShowId(),
            user_id: ticket.getUserId()
        }

        return ticketDataBAse
    }

    public bookTicket = async (ticket: Ticket) => {

        const newTicket = await this.ticketModelDataBAse(ticket)
        const tableTickets = TicketDataBase.TABLE_TICKETS

        await this.getConnection()
            .insert(newTicket)
            .into(tableTickets)
    }

    public userAlreadyBought = async (ids: IIdsTicketDTO) => {

        const tableTickets = TicketDataBase.TABLE_TICKETS

        const showFound = await this.getConnection()
            .select("*")
            .from(tableTickets)
            .where({ show_id: ids.idShow, user_id: ids.idUser })

        return showFound[0]
    }

    public maximumAmount = async (idShow: string) => {

        const tableTickets = TicketDataBase.TABLE_TICKETS

        const showFound = await this.getConnection()

            .from(tableTickets)
            .count('id AS count')
            .where({ show_id: idShow })

        return showFound[0].count as number
    }

    public removeTicket = async (ids: IIdsTicketDTO) => {

        const tableTickets = TicketDataBase.TABLE_TICKETS

        await this.getConnection()

            .delete('*')
            .from(tableTickets)
            .where({ show_id: ids.idShow, user_id:ids.idUser })

    }
}