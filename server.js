import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors'

// configure env
dotenv.config();

//database connectivity
connectDB();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use("/api/v1/product", productRoutes);

const PORT = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send({
        message:"Welcome to the E-Commerce Full Stack Mern App"
    })
})


app.listen(PORT,()=>{
    console.log(`Server is running on the PORT ${PORT}`.bgCyan.white)
})