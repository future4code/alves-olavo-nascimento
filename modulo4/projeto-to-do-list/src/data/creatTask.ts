import connection from "./baseDataBase"

export const creatTask = async (title: string, description: string, limitdate: string, user_id: string): Promise<void> => {
    const deadlineWithoutSlash = limitdate.split("/")
    const deadlineInReverse = deadlineWithoutSlash.reverse()
    const deadlineForAmerican = deadlineInReverse.join("/")

    await connection.raw(`
    INSERT INTO Tasks(id , title , description, limitdate, user_id)
    VALUES(
        "${Date.now().toString()}",
        "${title}",
        "${description}",
        "${deadlineForAmerican}",
        "${user_id}"
        );
    `)

}