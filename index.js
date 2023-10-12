const express = require("express")
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send(`Welcome to the homepage!`);
})

app.get('/name', (req, res) => {
    res.send(`Hello my name is Atharva Maskar!`);
})

app.listen(PORT, () => {
    console.log(`App running on Server ${PORT}`);
})