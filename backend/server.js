const express = require('express')
const app = express()
const colors = require('colors')
const dotenv = require('dotenv').config({ path: './config/.env' })
const morgan = require('morgan')
const { connectDB } = require('./config/dbConnect')
const { errorHandler } = require('./middleware/errorHandler')
const homeRouter = require('./routes/homeRoute')
const userRouter = require('./routes/usersRoute')
const cors = require('cors')

app.use(express.json())
app.use(cors())

connectDB()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(homeRouter)
app.use(`${process.env.USERS_URI}`, userRouter)

app.use(errorHandler)

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `\nApp running on: http://localhost:${process.env.PORT}`.green.inverse
  )
})

process.on('unhandledRejection', (error, promise) => {
  console.log(
    `Unhandled Rejection:\nName: ${error.name}\nMessage: ${error.message}\n`.red
      .inverse
  )
})
