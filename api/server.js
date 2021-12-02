
// Variables
const express = require('express')
const server = express();

server.use(express.json())

server.get('/', (req, res) => {
    res.send(`<h1>Hello!<h1>`)
})

const users = [
    {
        user: 'joe',
        password: 'russo'
    },
    {
        user: 'jacob',
        password: 'russo'
    }
]

const register = [
    {
        user: 'cain',
        password: 'palmer'
    }
]

const login = [
    {
        user: 'cain',
        password: 'palmer'
    }
]

// Requests
server.get('/api/users', (req, res) => {
    res.status(200).json(users)
})

server.post('/api/register', (req, res) => {
    res.status(200).json(register)
})

server.post('/api/login', (req, res) => {
    if (!login) {
        res.status(404).json({message: 'Please enter a valid login'})
    } else {
        res.status(200).json({message: 'Hello!'})
    }
})

// Exports
module.exports = server