import express from 'express'
import dotenv from 'dotenv'
import DB from './db/db.js'
import userRoutes from './routes/user.js'
import todoRoutes from './routes/todo.js'
import getTodo from './routes/todo.js'
import updateTodo from './routes/todo.js'
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT

DB()


//http://localhost:8000/api/v1/user/
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/todo', todoRoutes)
app.use('/api/v1/todo', getTodo)
app.use('/api/v1/todo', updateTodo)
//http://localhost:8000/api/v1/todo/get
//http://localhost:8000/api/v1/todo/create
app.listen(8000 || PORT, () => {
  console.log(`server started at ${PORT}`)
})
