const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.method === 'GET') {
        switch (req.url) {
            case '/':
            case '/Client-Side/Pages/index.html':
            case '/index.html':
                fs.readFile('./Client-Side/Pages/index.html', (err, data) => {
                    if (err) {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        return res.end("404 Not Found");
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    return res.end();
                });
                break;

        }
    } else if (req.method === 'POST') {
        var userData, name, email, address, phone;
        req.on('data', (data) => {
            console.log(data.toString());
            userData = data.toString();
            name = userData.split('&')[0].split('=')[1].replace('+', ' ');
            email = userData.split('&')[1].split('=')[1].replace('81%40', '@');
            address = userData.split('&')[2].split('=')[1];
            phone = userData.split('&')[3].split('=')[1];
        })

        fs.readFile('./clients.json', (err, clientsData) => {
            if (err) {
                console.error(err);
                return;
            }

            let clients = [];
            try {
                clients = JSON.parse(clientsData);
            } catch (error) {
                console.error(error);
            }

            clients.push(clientData);

            fs.writeFile('./clients.json', '[]', { flag: 'wx' }, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('Client data saved successfully');
            });
        })

        switch (req.url) {
            case '/profile.html':
            case '/Client-Side/Pages/profile.html':
                fs.readFile('./Client-Side/Pages/profile.html', (err, data) => {
                    if (err) {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        return res.end("404 Not Found");
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    var file = data.toString().replace('{name}', name)
                    file = file.replace('{MobileNumber}', phone)
                    file = file.replace('{Email}', email)
                    file = file.replace('{Address}', address)
                    res.write(file);
                    res.end();
                });
                break;
            default:
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end("404 Not Found");
                break;
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/html' });
        return res.end("405 Method Not Allowed");
    }
}).listen(7084, () => {
    console.log("Server running at http://localhost:7084");
});
