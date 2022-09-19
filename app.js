const cors = require('cors');
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

const db = require("./config/database");

app.use(cors({
    origin: '*'
}));

app.use("/", require('./routes'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})