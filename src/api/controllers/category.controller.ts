import { Handler } from "express"
import { CategoryModel } from "../model/category.model"
import { NotFoundError } from "../../config/errors/errors/not-found.error"

export const getCategories: Handler = async (req, res) => {
    const categories = await CategoryModel.find()
      
    res.status(200).json(categories)
}

export const getCategory: Handler = async (req, res) => {
    const id = req.params.id
    const category = await CategoryModel.find({_id: id})

    if(!category) throw new NotFoundError('category not found')

    res.status(200).send(category)

}
  
  