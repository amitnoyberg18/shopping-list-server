import { Handler } from "express"
import { Product, ProductModel } from "../model/product.model"
import { NotFoundError } from "../../config/errors/errors/not-found.error"
import { CategoryModel } from "../model/category.model"

export const getProducts: Handler = async (req, res) => {
    const products = await ProductModel.find()
    res.status(200).json(products)
}
export const getProductById: Handler = async (req, res) => {
    const id = req.params.id
    const product = await ProductModel.findById(id)

    if(!product) throw new NotFoundError(`Product with id: ${id} not found `)

    res.status(200).send(product)
}

export const postProduct: Handler = async (req, res) => {
    const body: {name: string, categoryId: string}  = req.body

    const category = await CategoryModel.findById(body.categoryId)

    if(!category) throw new NotFoundError(`category with id ${body.categoryId} not found`)

    const newProduct = new ProductModel({name: body.name, amount: 1, category})
    await newProduct.save()
    
    res.status(200).json({product: newProduct})
}

export const patchProduct: Handler = async (req, res) => {
    const {amount} = req.body

    const id = req.params.id
    const product = await ProductModel.findById(id)

    if(!product) throw new NotFoundError(`Product with id: ${id} not found `)

    product.amount = amount
    await product.save()
    
    res.status(200).json({product})
}

export const deleteProduct: Handler = async (req, res) => {
    const id = req.params.id
    const product = await ProductModel.findById(id)

    if(!product) throw new NotFoundError(`Product with id: ${id} not found `)

    await product.deleteOne()
    
    res.status(200).send('Deleted')

}