const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const { log } = require('console');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client-Side/Pages/index.html'));
})

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client-Side/Styles/styles.css'));
})

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client-Side/Scripts/script.js'));
})

app.get('/profile.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client-Side/Pages/profile.html'));
})

app.post('/profile.html', (req, res) => {
    const { name, email, address, phone } = req.body;
    fs.readFile(path.join(__dirname, '../Client-Side/Pages/profile.html'), 'utf8', (err, data) => {
        if (err) {
            res.status(404).send("404 Not Found");
            return;
        }
        let file = data.replaceAll('{name}', name)
            .replace('{MobileNumber}', phone)
            .replace('{Email}', email)
            .replace('{Address}', address);
        res.send(file);
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
