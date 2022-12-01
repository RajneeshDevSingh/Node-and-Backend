const express = require('express')
const path = require('path')

const app = express();
const publicPath = path.join(__dirname , 'public')

// app.use(express.static(publicPath))
// console.log(publicPath)
// app.listen(5000)


app.set('view engine' , 'ejs');

app.get('' , (req , resp) =>
{
    resp.sendFile(`${publicPath}/index.html`)
});


app.get('/help',(req , resp)=>
{
    resp.sendFile(`${publicPath}/help.html`)
});

app.get('/profile' , (req , resp)=>
{
    const user = 
    {
        name : 'Rajneesh',
        email:'@Rajneesh.com',
    }

    resp.render('profile' , {user})
})

app.listen(5000)