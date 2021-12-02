
// Variables
require('dotenv').config();
const server = require('./api/server')

const PORT = process.env.PORT || 8080

// Listening
server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})