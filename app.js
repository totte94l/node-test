const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 5000
const app = express()


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT}`)
})