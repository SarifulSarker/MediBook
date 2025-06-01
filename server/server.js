import express from 'express'

import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import conntectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
// app config
const app = express()
const port = process.eventNames.PORT || 8000
// conntect database

connectDB();


// middlewares
app.use(express.json())
app.use(cors())


// api endpoints
app.use('/api/admin', adminRouter)

app.get('/', (req, res)=>{
res.send('Api working greate ')
})

app.listen(port, ()=> console.log("✅ server started", port))


