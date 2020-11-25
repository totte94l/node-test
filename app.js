const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('Served through Express.....')
})

app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT}`)
})