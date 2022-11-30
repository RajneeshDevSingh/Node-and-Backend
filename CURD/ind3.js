const fs = require('fs')
const path = require('path')

const dirPath = path.join(__dirname );
const filePath = `${dirPath}/data.txt`

// fs.writeFileSync(filePath , "Some Data here")

console.log(filePath)
// console.log(dirPath)


try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }

