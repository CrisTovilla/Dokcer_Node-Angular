const express = require('express');
const http = require('http');
const path = require('path');

const app = express();


const port = 3000

app.use(express.static(__dirname+'/angular-test/dist/angular-test'));

app.use((req,res) =>{      
    res.sendFile(path.join(__dirname,'/angular-test/dist/angular-test/index.html'))
});


const server = http.createServer(app);

server.listen(port,()=>console.log('Running.......'));

