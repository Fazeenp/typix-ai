import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const PORT = process.env.PORT || 4000
const app = express()

import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

app.use(express.json())
app.use(cors())

await connectDB()

app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)
app.get('/',(req,res)=>res.send("API Working"))

app.listen(PORT,()=>console.log("Server running on port "+PORT))

// http://localhost:4000/api/user/register
// http://localhost:4000/api/user/login