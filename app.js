require('dotenv').config();
require('express-async-errors');
const express = require('express');
const morgan  = require('morgan');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');



const app = express();

// image upload with cloudinary
const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
})

// connect db
const connectDB = require('./db/connect');

// routers 
const authRoutes = require('./routes/authRoutes');
const mealRoutes = require('./routes/mealRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

// app use packages
app.use(express.json());
app.use(morgan('tiny'));
app.use(fileUpload({ useTempFiles: true }));
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.static('./public'))


app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/orders', orderRoutes)
app.use('/api/v1/users', userRoutes)


const port = process.env.PORT || 3000
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server running on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();