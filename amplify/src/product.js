// src/components/CreateProduct.js
import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createProduct } from '../graphql/mutations';

const CreateProduct = () => {
  const handleCreateProduct = async () => {
    const newProduct = {
      product_name: "Mona Lisa NFT",
      description: "Digital version of the Mona Lisa",
      price: 2000,
      stock_quantity: 5,
      image_url: "https://example.com/mona.jpg"
    };

    try {
      const result = await API.graphql(graphqlOperation(createProduct, { input: newProduct }));
      console.log("✅ Product created:", result.data.createProduct);
      alert("Product created successfully!");
    } catch (error) {
      console.error("❌ Error creating product:", error);
      alert("Failed to create product.");
    }
  };

  return (
    <div className="p-4">
      <button 
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-800"
        onClick={handleCreateProduct}
      >
        Create Mona Lisa NFT
      </button>
    </div>
  );
};

export default CreateProduct;

