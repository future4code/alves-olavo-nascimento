import connection from "./connection"

export default async function selectAllUsersByOrder(
    sort: string,
    order: string,
    email: string
): Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM aula49_exercicio WHERE email LIKE "%a%" ORDER BY ${sort} ${order}
       `)
   
    return result[0]
}