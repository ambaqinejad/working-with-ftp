const express = require('express');
const Client = require("ftp");
const cors = require('cors');
const fs = require("fs");
require('dotenv').config();

const app = express();
app.use(express.static('./public'))
app.use(cors())
const c = new Client();

const port = 3000;

// get list
// c.on('ready', () => {
//     c.list((err, list) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.dir(list);
//             c.end();
//         }
//     })
// })

// upload
// c.on('ready', () => {
//     c.put('./a.jpg', '/images/a.copy.jpg', (err) => {
//         if (err) {
//             console.error(err);
//             c.end();
//         } else {
//             console.log('1 Ok');
//             c.end()
//         }
//     })
// })

// download

// app.get('/image', (req, res) => {
//     console.log('aaaaaaaaaaaaaaaaaaaaa');
//     c.on('ready', () => {
//         c.get('/images/a.copy.jpg', (err, stream) => {
//             if (err) {
//                 console.error(err);
//                 c.end();
//                 return res.json({
//                     message: 'unsuccess',
//                     error: err.message
//                 })
//             } else {
//                 stream.once('close', function() {
//                     c.end();
//                     // return res.sendStatus(200);
//                 })

//                 stream.pipe(res)
//             }
//         })
//     })
// })

// c.connect({
//     host: process.env.host,
//     user: process.env.user,
//     password: process.env.password
// })

app.listen(port, function() {
    console.log('Server listening on port 3000');
})