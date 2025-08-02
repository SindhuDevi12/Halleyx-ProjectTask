import mongoose from 'mongoose';
import Product from './models/Product.js';
import products from './data/productData.json' assert { type: 'json' };

mongoose.connect('mongodb://localhost:27017/ecotrack')
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('✅ Products seeded successfully!');
    process.exit();
  })
  .catch(err => {
    console.error('Error seeding products:', err);
    process.exit(1);
  });
