import BaseDataBase from "./baseDataBase";

export class FollowData extends BaseDataBase {
    
    followedUser = async (
        id: string,
        idUserFollowing: string,
        idUserFollowed: string
    ): Promise<any> => {
        try {
            await this.getConnection()
                .insert({
                    id: id,
                    user_id_following: idUserFollowing,
                    user_id_followed: idUserFollowed
                })
                .into("cookenu_back_follow")

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    selectFollowers = async (idUserFollowed: string): Promise<any> => {
        console.log("idUserFollowed em selectFollowers", idUserFollowed)
        try {
            const followers = await this.getConnection().raw(`
                select * from cookenu_back_follow where user_id_followed='${idUserFollowed}'
            `)

            // .from("cookenu_back_follow")
            // .select("*")
            // .where("user_id_followed", idUserFollowed)

            return followers[0]

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    unfollowedUser = async (idUserUnfollow: string, userId: string): Promise<any> => {
        try {
            await this.getConnection()
                .delete("*")
                .from("cookenu_back_follow")
                .where({
                    user_id_followed: idUserUnfollow,
                    user_id_following: userId
                })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}