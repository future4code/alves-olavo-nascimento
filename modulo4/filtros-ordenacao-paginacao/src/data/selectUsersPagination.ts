import connection from "./connection"

export default async function selectUsersPagination(size: number, offset: any): Promise<any> {
    const result = await connection.raw(`
    SELECT * FROM aula49_exercicio WHERE name LIKE "%a%" LIMIT ${size} OFFSET ${offset};
    `)
    
    return result
}