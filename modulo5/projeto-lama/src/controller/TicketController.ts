import { Request, Response } from "express";
import { TicketBusiness } from "../business/TicketBusiness";
import { ITicketInputDTO } from "../model/Ticket";

export class TicketController {
    constructor(
        private ticketBusiness: TicketBusiness
    ) { }

    public ticket = async (req: Request, res: Response) => {
        console.log("entrou em ticket na TicketController")
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

    // public deleteTicket = async (req: Request, res: Response) => {
    //     console.log("entrou em deleteTicket na TicketController")
    //     try {
    //         const input = {
    //             token: req.headers.authorization as string,
    //             idTicket: req.params.id
    //         }
            
    //         const response = await this.ticketBusiness.ticket(input)

    //         res.status(201).send(response)
            
    //     } catch (error: any) {
    //         res.status(error.statusCode || 500).send({ message: error.message })
    //     }
    // }
}