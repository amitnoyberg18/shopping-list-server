import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import './config/DatabaseConfig'
import categoryRouter from './api/routes/category.router';
import productRouter from './api/routes/product.router'
import { errorHandler } from './config/errors/error-handler';
import { NotFoundError } from './config/errors/errors/not-found.error';

const port = process.env.PORT || 3500;

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.use('/product', productRouter)
app.use('/category', categoryRouter)

app.use((req)=>{
    throw new NotFoundError(`path: ${req.path} not found`)
})

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})