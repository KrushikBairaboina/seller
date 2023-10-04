
import Product from '../model/product-schema.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.status(200).json(products);
    }catch (error) {
        response.status(500).json({message: error.message});
    }
}

export const addProduct = async (request, response) => {
    try {
     
      const existingProduct = await Product.findOne({ id: request.body.id });
  
      if (existingProduct) {
        return response.status(401).json({ message: 'Product with this ID already exists' });
      }
        const product =request.body;
      const newProduct = new Product(product);
  

      await newProduct.save();
  
      response.status(201).json({ message: product });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }
  export const editProduct = async (request, response) => {
    try {
      const productId = request.params.id; 
      
      const existingProduct = await Product.findOne({ id: productId });
      
      if (!existingProduct) {
        return response.status(404).json({ message: 'Product not found' });
      }
  
      const editedProductData = request.body;

      Object.assign(existingProduct, editedProductData);
  
      await existingProduct.save();
  
      response.status(200).json({ message: 'Product updated successfully', product: existingProduct });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }