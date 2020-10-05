const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World Con Commit Nuevo'))
app.listen(3000, () => console.log('Server ready'))
