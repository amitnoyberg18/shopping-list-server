import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { CategoryModel } from '../api/model/category.model';

dotenv.config()

// Connect to MongoDB
const connectDB = async ()=> {
    try {
        if(!process.env.MONGO_URI) throw new Error('No mongo uri found')

        await mongoose.connect(process.env.MONGO_URI)
    }catch(err){
        console.error(err)
    }
}

// Initialize categories
const categoriesData = ['מוצרי ניקיון', 'גבינות', 'ירקות ופירות', 'בשר ודגים', 'מאפים'];

// Save categories to the database
const initCategories = async () => {
  try {
    for (const categoryName of categoriesData) {
      const category = new CategoryModel({ name: categoryName });
      await category.save();
    }
    console.log('Categories initialized successfully');
  } catch (error) {
    console.error('duplicate initializing categories');
  } finally {
    // // Close the MongoDB connection
    // mongoose.connection.close();
  }
};

connectDB().then(()=>initCategories())