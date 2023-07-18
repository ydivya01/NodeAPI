const express = require('express');
const fs = require('fs');
const app = express();

app.post('/create', (req, res) => {

    const dateObject = new Date();

    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    

    const fileName = `${hours}-${minutes}.txt`;

    fs.writeFile(`./${fileName}`, dateObject.toString(),(err)=>{
    if(err){
        console.log(err);
        res.send('Error creating file');
    }
        else{
            res.send('file Created')
        }
    })

console.log(dateObject)

} )

app.listen(3000, () => {
    console.log('server is running on port 3000');
} );