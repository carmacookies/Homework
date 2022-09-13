import { ProductsModel } from "./productModel"

export async function addProduct(req, res) {
    try {
        const { title, price} = req.body
        const newProduct = new ProductsModel({title, price})
        await newProduct.save
        res.send ('new product added')
    } catch (error) {
        res.send(console.error(error))
    }
    
}