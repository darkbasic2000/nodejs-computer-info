require('dotenv').config()
const express = require('express')
const router = require('./routes/routes')
const PORT = process.env.PORT || 5000

const app = express()

app.set('view engine', 'ejs')

app.use(router)

app.listen(3000, () => {
    console.log(`App running on PORT ${PORT}`)
})