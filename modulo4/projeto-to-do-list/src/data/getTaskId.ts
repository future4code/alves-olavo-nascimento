import connection from "./baseDataBase"

export const getTaskId = async (idTask: string): Promise<any> => {
    
    const task = await connection('Tasks')
        .select(
            "Tasks.id",
            "title",
            "description",
            "status",
            "limitdate",
            "user_id",
            "Users.nickname"
        )
        .where('Tasks.id', idTask)
        .join('Users', 'Tasks.user_id', "Users.id")
    return task
}