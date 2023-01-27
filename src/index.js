const express = require('express');

const PORT = process.env.PORT || 8080
const app = express()

app.get('/', (req, res) => {
    res.send('HELLO NODEMON+ POSTGRES + NODE JS')
})
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

document.querySelector('test').addEventListener('click', () => {

})