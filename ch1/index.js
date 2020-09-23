const fs = require('fs');


/* create a folder */
//fs.mkdirSync('dev');
/* create a file into folder */
//fs.writeFileSync('dev/bio.txt', "this is dummy file");

/* concate data into existing file */
//fs.appendFileSync('dev/bio.txt', '  ------> this isoerride data');
/* read or retrive the data from file */

// const fileData = fs.readFileSync('dev/bio.txt','UTF-8');
// console.log(fileData);

/* rename the file */
fs.renameSync('dev/bio.txt', 'dev/bio1.txt'); /* if you not give the full path in second parameter it will create a new file on root lavel */

/* delete the file */
//fs.unlinkSync('dev/bio1.txt');
/* Delete the folder */
//fs.rmdirSync('dev')

