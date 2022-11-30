const fs = require('fs');

// const input = process.argv;
// fs.writeFileSync(input[2] , input[3]);

const input = process.argv;

if(input[2] == 'add')
{
    fs.writeFileSync(input[3] , input[4]); // first file name , second data;
}
else if(input[2] == 'remove')
{
    fs.unlinkSync(input[3]); // file delete
}
else
{
    console.log("invalid input")
    
}