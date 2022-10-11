import { ShowBusiness } from "../business/ShowBusiness";
import { ICreatShowInputDTO, IGetShowsinputDTO } from "../model/Shows";
import { Request, Response } from "express";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) { }

    public creatShow = async (req: Request, res: Response) => {
        try {
            const input: ICreatShowInputDTO = {
                token: req.headers.authorization as string,
                band: req.body.band,
                startsAt: req.body.startsAt
            }

            const response = await this.showBusiness.creatShow(input)

            res.status(201).send(response)

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    public getShows = async (req: Request, res: Response) => {
        try {
            const input: IGetShowsinputDTO = {
                token: req.headers.authorization as string
            }

            const shows = await this.showBusiness.getShows(input)

            res.status(201).send(shows)

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}