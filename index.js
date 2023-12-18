const express = require('express')

const server = express()

const lista = ["NodeJS", "JavaScript", "TypeScript", "Java", "Ruby", "C#", "C++"]

server.get("/teste/:index", (req, res) => {
    const { index } = req.params

    return res.json({
        curso: `${lista[index]}`
    })
})

server.listen(3000)