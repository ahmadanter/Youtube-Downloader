const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

app.listen(4000, () => {
    console.log('server is working at port 4000 !!');
});

app.get('/download', (req,res) => {
    var URL = req.query.URL;
    
    res.header('Content-Disposition', 'attachment; filename="audio.mp4');

    ytdl(URL, {
        format: 'mp4',
    }).pipe(res);
});
