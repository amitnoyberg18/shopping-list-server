import { ErrorRequestHandler } from 'express'
import { CustomError } from './errors/custom.error'

export const errorHandler: ErrorRequestHandler = (err: Error, req, res) => {

    if(err instanceof CustomError) {
        return res.status(err.statusCode).json({errors: err.message})
    }

    res.status(500)
    res.render('error', {errors: [{message: err.message}]})
}