import { IDeleteTicketInputDTO, ITicketInputDTO } from "../model/Ticket";
import { TicketBusiness } from "../business/TicketBusiness";
import { Request, Response } from "express";

export class TicketController {
    constructor(
        private ticketBusiness: TicketBusiness
    ) { }

    public ticket = async (req: Request, res: Response) => {
        try {
            const input: ITicketInputDTO = {
                token: req.headers.authorization as string,
                idShow: req.params.id
            }

            const response = await this.ticketBusiness.ticket(input)

            res.status(201).send(response)

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    public deleteTicket = async (req: Request, res: Response) => {
        try {
            const input: IDeleteTicketInputDTO = {
                token: req.headers.authorization as string,
                idShow: req.params.id
            }

            const response = await this.ticketBusiness.deleteTicket(input)

            res.status(200).send(response)

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}