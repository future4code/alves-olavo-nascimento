import connection from "../connection"

export const creatUser = async (name: string, nickname: string, email: string): Promise<void> => {
    await connection.raw(`
    INSERT INTO Users(id, name, nickname, email)
    VALUES(
        "${Date.now().toString()}",
        "${name}",
        "${nickname}",
        "${email}"
    );
`)
}