import { Router } from 'express'
import { getProductById, getProducts, patchProduct, postProduct } from '../controllers/product.controller'

const productRouter = () => {
    const productRouter = Router()

    productRouter.get('/', getProducts)
    productRouter.get('/:id', getProductById)

    productRouter.post('/', postProduct)
    productRouter.patch('/:id', patchProduct)

    return productRouter
}

export default productRouter()