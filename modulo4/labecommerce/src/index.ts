import app from "./app";
import createdUserEndpiont from "./endpoints/createdUsersEndpoint";
import createProdutsEndpoint from "./endpoints/createProdutsEndpoint";
import getAllProductsEndpoint from "./endpoints/getAllProductsByOrderEndpoint";
import getAllUsersEndpoint from "./endpoints/getAllUsersEndpoint";
import getPurchasesByIdEndpoint from "./endpoints/getPurchasesByIdEndpoint";
import purchasesEndpoint from "./endpoints/purchasesEndpoint";

app.get('/users', getAllUsersEndpoint)

app.get('/products', getAllProductsEndpoint)

app.post('/users', createdUserEndpiont)

app.post('/products', createProdutsEndpoint)

app.post('/purchases', purchasesEndpoint)

app.get('/users/:user_id/purchases', getPurchasesByIdEndpoint)


