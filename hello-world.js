const express = require('express') ;
const http = require('http') ;
const fs = require('fs') ; 

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('<h1>Hello Node!!!!</h1>\n');
  });

const content = "hello node 2" ;

fs.writeFile ('welcome.txt', content, (err) => {
if (err) {
    console.log("error writing to welcome.txt: ", err);
} else {
    console.log('file writen successfuly'); 
}
});

fs.readFile ('hello.txt','utf8', (err, data) => {
    if (err) {
        console.log("error reading the file : ", err);
    } else {
        console.log("data read from hello.txt", data);
    }
})


  const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});