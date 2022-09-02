import connection from "./connnection"

const createProducts = async (
    name: string,
    price: string,
    image_url: string
): Promise<any> => {
    try {
        const id = Date.now()

        await connection.raw(`
        INSERT INTO labecommerce_products(id, name, price, image_url)
            VALUES(
            "${id}",
            "${name}",
            "${price}",
            "${image_url}"
            )
        `)
    } catch (error) {
        throw new Error("Ops! Um erro inesperado ocorreu =/");
    }
}

export default createProducts