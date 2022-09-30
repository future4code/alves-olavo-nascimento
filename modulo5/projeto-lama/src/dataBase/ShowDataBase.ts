import BaseDataBase from "./BaseDataBase";
import { Shows } from "../model/Shows";

export class ShowDataBase extends BaseDataBase {
    public static TABLE_SHOWS = "lama_Shows"

    private showModelDataBase = async (show: Shows) => {
        const showDataBase = {
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

        const dateFound = await this.getConnection()
            .select("*")
            .from(tableShows)
            .where({ starts_at: date })

        return dateFound[0]
    }

    public selectAllShows = async () => {
        const tableShows = ShowDataBase.TABLE_SHOWS

        const shows = await this.getConnection()
            .select("*")
            .from(tableShows)

        return shows
    }

}