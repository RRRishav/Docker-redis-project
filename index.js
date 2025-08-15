import express from 'express'
import dotenv from 'dotenv'
import DB from './db/db.js'
import userRoutes from './routes/user.js'
import todoRoutes from './routes/todo.js'
import getTodo from './routes/todo.js'
import updateTodo from './routes/todo.js'
import deleteTodo from './routes/todo.js'
import cookieParser from 'cookie-parser'
import logout from './routes/user.js'
dotenv.config()

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT

DB()


//http://localhost:8000/api/v1/user/
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/todo', todoRoutes)
app.use('/api/v1/todo', getTodo)
app.use('/api/v1/todo', updateTodo)
app.use('/api/v1/todo', deleteTodo)
app.use('/api/v1/user', logout)

//http://localhost:8000/api/v1/todo/get
//http://localhost:8000/api/v1/todo/create
//http://localhost:8000/api/v1/todo/update/64d969500000000000000000
//http://localhost:8000/api/v1/todo/delete/64d969500000000000000000

//in browser cookie we store token and we use it to authenticate the user
app.listen(8000 || PORT, () => {
  console.log(`server started at ${PORT}`)
})
