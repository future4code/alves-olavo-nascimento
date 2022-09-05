export type Products = {
    id: string,
    name: string,
    price: number,
    image_url: string
}

export type Users = {
    map: any
    id: string,
    name: string,
    email: string,
    password: string
}

export type Purchases = {
    id: string,
    name: string,
    product_id: string,
    quantity: number,
    total_price: number
}

export type AllPurchasesPerson = {
    idPurchase: string,
    nameProduct: string,
    quantity: number,
    totalPrice: number
}

export type AllUsersAndPurchases = {
    idUser: string,
    nameUser: string,
    allPurchases: AllPurchasesPerson[]
}