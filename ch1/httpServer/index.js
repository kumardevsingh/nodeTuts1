const http = require('http');
//const url = require('url');
const fs = require('fs');


const server = http.createServer((req, res) => {
    //console.log("in the httpcreate function :- " + req.url)

    /* read file only once or we can say fetch data once */

    const userData = fs.readFileSync(`${__dirname}/userApi/userapi.js`, 'UTF-8')
    //console.log(data);




    if (req.url === '/') {
        res.end("<h1>--You are on home page--</h1>");
    } else if (req.url === '/about') {
        setTimeout(() => {
            res.write("<h1>--You are on about page--</h1>");
            res.end();
        }, 5000);

    } else if (req.url === '/userapi') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(userData);
        res.end();
        /* if we use below method it is taking the more time to execute*/
        /* fs.readFile(`${__dirname}/userApi/userapi.js`, 'UTF-8', function (err, data) {
            //console.log(data);
            res.write(data);
            res.end();
        }) */



    } else {
        // res.writeHead(404, { 'Content-type': 'text/html' })
        res.end("<h1>404 Page not found!!</h1>");
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server is listing on port no :8000');
})