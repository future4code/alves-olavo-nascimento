import { RecipesBase } from "../model/RecipesBase";
import BaseDataBase from "./baseDataBase";

export class RecipeData extends BaseDataBase {
    insertRecipe = async (recipesBase: RecipesBase): Promise<any> => {
        try {
            await this.getConnection()
                .insert({
                    id: recipesBase.getId(),
                    title: recipesBase.getTitle(),
                    description: recipesBase.getDescription(),
                    posting_date: recipesBase.getPostingDate(),
                    posting_time: recipesBase.getPostingTime(),
                    user_id: recipesBase.getUserId()
                })
                .into("cookenu_back_recipes")

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    selectRecipeById = async (id: string): Promise<any> => {
        try {
            const [recipes] = await this.getConnection()
                .from("cookenu_back_recipes")
                .select(
                    "cookenu_back_recipes.id",
                    "cookenu_back_recipes.title",
                    "cookenu_back_recipes.description",
                    "cookenu_back_recipes.posting_date as postingDate",
                    "cookenu_back_recipes.posting_time as postingTime",
                    "cookenu_back_users.id as idUser",
                    "cookenu_back_users.name as nameUser"
                )
                .join("cookenu_back_users", "cookenu_back_recipes.user_id", "cookenu_back_users.id")
                .where("cookenu_back_recipes.id", id)

            return recipes

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    selectAllRecipeByIdUser = async (id: string): Promise<any> => {
        try {
            const recipes = await this.getConnection()
                .from("cookenu_back_recipes")
                .select("*")
                .where("user_id", id)

            return recipes

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    updateRecipeByIdUser = async (
        idRecipeParams: string,
        title: string,
        description: string,
        dateNow: string
    ): Promise<any> => {
        try {
            await this.getConnection().raw(`
                update cookenu_back_recipes
                set title="${title}", description="${description}" , last_update="${dateNow}"
                where id='${idRecipeParams}'
            `)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}