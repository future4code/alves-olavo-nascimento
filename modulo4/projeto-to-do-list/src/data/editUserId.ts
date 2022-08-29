import connection from "./baseDataBase"

export const editUserId = async (idParams: string, name: string, nickname: string): Promise<void> => {
    await connection.raw(`
            UPDATE Users SET name = "${name}", nickname = "${nickname}" WHERE id = "${idParams}"
        `)
}