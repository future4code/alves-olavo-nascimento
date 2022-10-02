import { ICreatShowInputDTO, ICreatShowOutputDTO, IGetShowsinputDTO, Shows } from "../model/Shows";
import { MissingInformation } from "../error/MissingInformation";
import { TokenNotInformed } from "../error/TokenNotInformed";
import { Authenticator } from "../service/Authenticator";
import { UserDataBase } from "../dataBase/UserDataBase";
import { ShowDataBase } from "../dataBase/ShowDataBase";
import { HashManager } from "../service/HashManager";
import { GenerateId } from "../service/GenerateId";
import { AdminsOnly } from "../error/AdminsOnly";
import { Role } from "../model/User";
import { DateNotAllowed } from "../error/DateNotAllowed";
import { DateInUse } from "../error/DateInUse";
import { TicketDataBase } from "../dataBase/TicketDataBase";

export class ShowBusiness {
    constructor(
        private generateId: GenerateId,
        private userDataBase: UserDataBase,
        private showDataBase: ShowDataBase,
        private authenticator: Authenticator,
        private ticketDataBase: TicketDataBase
    ) { }

    public creatShow = async (input: ICreatShowInputDTO) => {

        const { token, band, startsAt } = input

        if (!token) {
            throw new TokenNotInformed()
        }
        if (!band || !startsAt) {
            throw new MissingInformation()
        }

        const startDate1 = new Date("2022-12-05")
        const startDate = new Date("2022-12-05").toLocaleDateString()
        console.log("startDate1", startDate1)
        console.log("startDate", startDate)

        if (startsAt < startDate) {
            throw new DateNotAllowed()
        }

        const payload = this.authenticator.verifyToken(token)

        const userDataBase = await this.userDataBase.selectUserById(payload.id)

        if (userDataBase.role !== Role.ADMIN) {
            throw new AdminsOnly()
        }

        const newFormatStartsAt = startsAt.split("-").reverse().join()
        const dateFormateDate = new Date(newFormatStartsAt)

        const dateExist = await this.showDataBase.selectShowsByDate(newFormatStartsAt)

        if (dateExist !== undefined) {
            throw new DateInUse()
        }

        const idShow = this.generateId.generateId()

        const newShow = new Shows(idShow, band, dateFormateDate)

        await this.showDataBase.insertShow(newShow)

        const response: ICreatShowOutputDTO = {
            message: `Você criou um show da banda ${band} para dia ${startsAt}.`
        }

        return response
    }

    public getShows = async (input: IGetShowsinputDTO) => {

        const { token } = input

        if (!token) {
            throw new TokenNotInformed()
        }

        const showsDataBase = await this.showDataBase.selectAllShows()

        const shows = showsDataBase.map((show) => {
            return new Shows(show.id, show.band, show.starts_at,)
        })

        for (let show of shows) {
            const idShow = show.getId()
            const tickets = await this.ticketDataBase.maximumAmount(idShow)

            show.setTicket(show.getTicket() - tickets)
        }

        return shows
    }
}