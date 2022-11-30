const fs = require('fs')
const path = require('path')

const dirPath = path.join(__dirname );
const filePath = `${dirPath}/data.txt`

// fs.writeFileSync(filePath , " Some Data here")

console.log(filePath)
// console.log(dirPath)


// try {
//     const data = fs.readFileSync(filePath, 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }


// fs.appendFile(filePath,"Some new Data" , (err)=>
// {
//     if(!err)console.log("File is Updated") ;
// })

// fs.rename(filePath ,`${dirPath}/NewData.txt`, (err)=>
// {
//     if(!err)console.log("File name is Updated") ;
// }) 


fs.unlinkSync(`${dirPath}/NewData.txt`)