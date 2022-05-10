const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

const port = process.env.PORT || 5000

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(cors());
// app.use('./upload', express.static('upload'));
// Require book routes
const bookRoutes = require('./src/routes/book.routes')

// using as middleware
app.use('/api/v1/books', bookRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});