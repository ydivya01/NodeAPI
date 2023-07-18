// const express = require('express');
const fs = require("fs");
// const app = express();


// app.post('/readFolder', (req, res) =>{

//     fs.readdir("./NodeJS file system", (err, files)=>{
//         console.log("Files in the directory", files);
//     })
// })
//console.log("Current directory:", __dirname);

fs.readdir('./Nodejs file system', (err, files) => {
    if (err)
      console.log(err);
    else {
      console.log("Filenames with the .txt extension:");
      files.forEach(file => {
        if (path.extname(file) == ".txt")
          console.log(file);
      })
    }
  })

// app.listen(3000,()=>{
//     console.log("server is running on the port 3000")
// })