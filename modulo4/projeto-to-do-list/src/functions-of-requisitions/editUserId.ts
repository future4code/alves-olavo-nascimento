import connection from "../connection"

export const editUserId = async (idParams: string, name: string, nickname: string): Promise<void> => {
    if (name === "" && nickname) {
        await connection.raw(`
        UPDATE Users SET nickname = "${nickname}" WHERE id = "${idParams}"
    `)
    } else if (name && nickname === "") {
        await connection.raw(`
            UPDATE Users SET name = "${name}" WHERE id = "${idParams}"
        `)
    } else if (name && nickname) {
        await connection.raw(`
            UPDATE Users SET name = "${name}", nickname = "${nickname}" WHERE id = "${idParams}"
        `)
    }

}