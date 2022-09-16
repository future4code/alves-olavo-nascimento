import { Recipes } from "../model/Recepes";
import { UserBase } from "../model/UserBase";
import BaseDataBase from "./baseDataBase";

export class UserData extends BaseDataBase {
    insertUserData = async (user: UserBase) => {
        try {
            console.log('entrei em insertUserData')
            await this.getConnection()
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword()
                })
                .into("cookenu_back_users")

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    selectUserByEmail = async (email: string): Promise<any[]> => {
        try {
            const userFound = await this.getConnection()
                .select("*")
                .into("cookenu_back_users")
                .where("email", email)

            return userFound

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    selectUserById = async (id: string): Promise<any[]> => {
        try {
            const userFound = await this.getConnection()
                .select("*")
                .into("cookenu_back_users")
                // .where("id", id)
                .where({id})

            return userFound

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    insertRecipe = async (recipe: Recipes): Promise<any> => {
        try {
             await this.getConnection()
                .insert({
                    id: recipe.getId(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                    posting_date: recipe.getPostingDate(),
                    posting_time: recipe.getPostingTime(),
                    user_id: recipe.getUserId()
                })
                .into("cookenu_back_recipes")

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}