import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/index.js'

const app = express()
app.use(express.json())
app.use(routes)

dotenv.config()


const { DB } = process.env
mongoose.connect(DB, ()=> console.log('connect to database'))


export { mongoose as Mongoose }
export default app