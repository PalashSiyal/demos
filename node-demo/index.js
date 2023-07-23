// const http = require('http');
// const data = require('./data');
// http.createServer((req, res)=>{
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(5000);


// const fs = require('fs');
// const path = require('path')
// const dirPath  = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple.txt`;

// for(i = 0;i<5; i++) {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple tet file");

// }




// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item => {
//         console.log("file name is ", item)
//     }))
// })


// fs.writeFileSync(filePath,'This is a simple text file');
// fs.readFile(filePath,'utf8',(err, item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath,' and file name is apple.txt', (err)=>{
//     if(!err) console.log("file is updated");
// })

// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file is renamed");
// })


//for deleting

// fs.unlinkSync(`${dirPath}/fruit.txt`) 


// //Express
// const express = require('express');
// const app = express();

// app.get('/',(req, res)=>{
//     console.log("data send by browser", req.query.name);
//     res.send("This is homepage")
// })

// app.get('/about',(req, res)=>{
//     res.send("This is about page")
// })

// app.listen(5000)


const express = require('express')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname, 'public')

app.use(express.static(publicPath));

app.listen(5000);