import { Router } from 'express'
import { getCategories, getCategory } from '../controllers/category.controller'

const categoryRouter = () => {
    const categoryRouter = Router()

    categoryRouter.get('/', getCategories)
    categoryRouter.get('/:id', getCategory);
    
    return categoryRouter
}

export default categoryRouter()