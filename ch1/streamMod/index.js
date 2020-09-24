//handle server stream data ---> data , end and error

const fs = require('fs');
const http = require('http');


const serve = http.createServer();
serve.on('request', (req, res) => {
    /* This method will download your whole data and then show */
    /* fs.readFile('input.txt', 'UTF-8', (err, data) => {
        if (err) {
            return console.error(err);

        }
        res.end(data.toString());

    }) */
    /* Second method for streaming */
    let count = 0

    const readableStream = fs.createReadStream('input.txt');
    readableStream.on('data', (chunkData) => {
        count++
        res.write(chunkData);
    });
    readableStream.on('end', () => {
        res.end();

    })
    readableStream.on('error', (error) => {

        res.end(error);

    })

    /* 3rd way */

    /* const readableStream = fs.createReadStream('input.txt');
    readableStream.pipe(res); */
});

serve.listen(8000, '127.0.0.1');
