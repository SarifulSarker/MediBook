import express from 'express'

import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import conntectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

// app config
const app = express()
const port = process.eventNames.PORT || 8000
// conntect database

connectDB();


// middlewares
app.use(express.json())
app.use(cors())

conntectCloudinary();
// api endpoints
app.use('/api/admin', adminRouter)

// doctor endpoint
app.use('/api/doctor', doctorRouter)
// user endpoint
app.use('/api/user', userRouter )
app.get('/', (req, res)=>{
res.send('Api working greate ')
})

app.listen(port, ()=> console.log("✅ server started", port))


