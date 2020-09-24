
const fs = require('fs');


const biodata = {
    name: "Devendra",
    age: 30,
    skills: 'node javascript angular'
}

console.log(biodata);

const jsonData = JSON.stringify(biodata);

console.log(jsonData);

/* fs.writeFile('json1.json', jsonData, (err) => {
    console.log("done");

}) */

fs.readFile('json1.json', (err, data) => {
    const orgData = JSON.parse(data);
    console.log(orgData);

})
