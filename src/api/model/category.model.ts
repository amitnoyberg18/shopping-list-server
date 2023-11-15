import { Schema, model, Document } from 'mongoose';

// Define the category schema
export interface Category extends Document {
  name: string;
}

export const categorySchema = new Schema<Category>({
  name: { type: String, required: true, unique: true },
});

// Create and export the Category model
export const CategoryModel = model<Category>('Category', categorySchema);