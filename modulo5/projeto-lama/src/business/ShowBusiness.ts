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

export class ShowBusiness {
    constructor(
        private hashManager: HashManager,
        private generateId: GenerateId,
        private userDataBase: UserDataBase,
        private showDataBase: ShowDataBase,
        private authenticator: Authenticator
    ) { }

    public creatShow = async (input: ICreatShowInputDTO) => {

        const { token, band, startsAt } = input

        if (!token) {
            throw new TokenNotInformed()
        }
        if (!band || !startsAt) {
            throw new MissingInformation()
        }
        if (startsAt < "05-12-2022") {
            throw new DateNotAllowed()
        }

        const payload = this.authenticator.verifyToken(token)

        const userDataBase = await this.userDataBase.selectUserById(payload.id)

        if (userDataBase.role !== Role.ADMIN) {
            throw new AdminsOnly()
        }
        
        const idShow = this.generateId.generateId()
        
        const new_date = startsAt.split("-")
        const dateReverse = new_date.reverse()
        const deteAmerican = dateReverse.join("-")
        
        const dateExist = await this.showDataBase.selectShowsByDate(deteAmerican)
        
        // const dateExist = showsDataBase.map((show) => show.starts_at === startsAt)
        
        if (dateExist !== undefined) {
            throw new DateInUse()
        }

        const newShow = new Shows(idShow, band, deteAmerican)

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

        return showsDataBase
    }
}