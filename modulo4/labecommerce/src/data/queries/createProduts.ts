import connection from "../connnection"

const createProducts = async (
    name: string,
    price: string,
    image_url: string
): Promise<void> => {
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
        throw new Error("Erro em Criar produto.");
    }
}

export default createProducts