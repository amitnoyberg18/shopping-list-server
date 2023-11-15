import { Schema, model, Document, Types } from 'mongoose';
import { Category, categorySchema } from './category.model';

export interface Product extends Document {
  name: string
  amount: number
  category: Category
}

const productSchema = new Schema<Product>({
    name: { 
        type: String, 
        required: true 
    },
    amount: {
        type: Number, 
        required: true, 
        min: 0,
        default: 0
    },
    category: {
        type: categorySchema,
        ref: 'Category',
        required: true,
    },
});

export const ProductModel = model<Product>('Product', productSchema);
