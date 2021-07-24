const express = require('express');
const ftp = require("basic-ftp");
// const cors = require('cors');
// const fs = require("fs");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const client = new ftp.Client()
client.ftp.verbose = true

app.get('/image', (req, res) => {
    client.access({
            host: process.env.host,
            user: process.env.user,
            password: process.env.password,
        }).then(response => {
            console.log(`FTP Response: ${JSON.stringify(response)}`);
            return Promise.resolve(true)
        }).then(() => {
            client.downloadTo('a.jpg', '/images/a.copy.jpg')
        }).then(() => {
            console.log('File was downloaded.');
        })
        .catch(err => console.error(err))
})

app.use(express.static('./public'))



// client.trackProgress(info => {
//     console.log("File", info.name)
//     console.log("Type", info.type)
//     console.log("Transferred", info.bytes)
//     console.log("Transferred Overall", info.bytesOverall)
// })



app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`);
})