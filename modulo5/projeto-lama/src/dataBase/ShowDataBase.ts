import { IShowsInputDataBaseDTO, IShowsOutputDataBaseDTO, Shows } from "../model/Shows";
import BaseDataBase from "./BaseDataBase";

export class ShowDataBase extends BaseDataBase {
    public static TABLE_SHOWS = "lama_Shows"

    private showModelDataBase = async (show: Shows) => {
        const showDataBase: IShowsInputDataBaseDTO = {
            id: show.getId(),
            band: show.getBand(),
            starts_at: show.getStartsAt()
        }

        return showDataBase
    }

    public insertShow = async (show: Shows) => {
        const tableShows = ShowDataBase.TABLE_SHOWS
        const newShow = await this.showModelDataBase(show)

        await this.getConnection()
            .insert(newShow)
            .into(tableShows)
    }

    public selectShowsByDate = async (date: string) => {
        const tableShows = ShowDataBase.TABLE_SHOWS

        const dateFound: IShowsOutputDataBaseDTO[] = await this.getConnection()
            .select("*")
            .from(tableShows)
            .where({ starts_at: date })

        return dateFound[0]
    }

    public selectShowsById = async (idShow: string) => {
        const tableShows = ShowDataBase.TABLE_SHOWS

        const dateFound: IShowsOutputDataBaseDTO[] = await this.getConnection()
            .select("*")
            .from(tableShows)
            .where({ id: idShow })

        return dateFound[0]
    }

    public selectAllShows = async () => {
        const tableShows = ShowDataBase.TABLE_SHOWS

        const shows: IShowsOutputDataBaseDTO[] = await this.getConnection()
            .select()
            .from(tableShows)

        return shows
    }

}