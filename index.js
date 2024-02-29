const express = require('express');
const app = express();
const keepAlive = require('./keep_alive.js');
const fs = require('fs');
const path = require('path');
const port = 3000;
app.get('/', (req, res) => {
  // Change Type: JavaScript
  res.sendFile(__dirname + '/m3u.m3u8.js')
});
app.get('/global/:url', (req, res) =>{
  // Change Type: JavaScript
  fetch("https://"+req.params.url)
  .then(response => response.text())
  .then(data => {
    res.type('application/javascript')
    res.send(`#EXTM3U
    #EXTINF:-1 tvg-id="0" tvg-name="" tvg-logo="https://i.imgur.com/kJpQi8F.png" group-title="Đã truy cập ${req.params.url} thông qua global", Bạn đã truy cập ${req.params.url} thông qua global
    https://a8b92ca1-82d2-4dd1-b6f8-000ec6df262b-00-1frbfhbagnd36.sisko.replit.dev/get/instr/u
        #EXTINF:-1 tvg-id="0" tvg-name="" tvg-logo="https://i.imgur.com/kJpQi8F.png" group-title="Đã truy cập ${req.params.url} thông qua global", Token của quý khách đang động bộ lưu trữ từ ${req.params.url}
        https://a8b92ca1-82d2-4dd1-b6f8-000ec6df262b-00-1frbfhbagnd36.sisko.replit.dev/get/instr/7n
        #EXTINF:-1 tvg-id="0" tvg-name="" tvg-logo="https://i.imgur.com/kJpQi8F.png" group-title="Đã truy cập ${req.params.url} thông qua global", Việc truy cập ${req.params.url} sẽ tổn 1-2 phút khi cập nhật máy chủ
        https://a8b92ca1-82d2-4dd1-b6f8-000ec6df262b-00-1frbfhbagnd36.sisko.replit.dev/get/instr/u
        #EXTINF:-1 tvg-id="0" tvg-name="" tvg-logo="https://i.imgur.com/kJpQi8F.png" group-title="Đã truy cập ${req.params.url} thông qua global", Thời gian truy cập ${req.params.url}: ${new Date().toLocaleString()}
        https://a8b92ca1-82d2-4dd1-b6f8-000ec6df262b-00-1frbfhbagnd36.sisko.replit.dev/get/u/u
        https://a8b92ca1-82d2-4dd1-b6f8-000ec6df262b-00-1frbfhbagnd36.sisko.replit.dev/get/uun/j
#${data}`)
  }).catch(err => {
    res.type('application/javascript')
    res.send(`#EXTM3U
#EXTINF:-1 tvg-id="0" tvg-logo="https://i.imgur.com/ZnQj3Xj.png" group-title="ERROR", Sai liên kết hoặc streamlink hợp lệ
https://a8b92ca1-82d2-4dd1-b6f8-000ec6df262b-00-1frbfhbagnd36.sisko.replit.dev/get/instr/u`);
})
});
keepAlive();
app.get('/redirect/:url', (req,res)=>{
  res.redirect(req.params.url);
});
app.get('/player.html', (req, res) => {
  // Change Type: JavaScript
  res.sendFile(__dirname + '/get/player.html');
});
app.get('/get/:name/:file', (req, res) => {
  // Change Type: JavaScript
  if(fs.existsSync(__dirname + '/get/' + req.params.name + '/' + req.params.file)){
      res.sendFile(__dirname + '/get/' + req.params.name + '/' + req.params.file);
  } else {
      res.sendFile(__dirname + '/get/playtime/chuaco.mp4');
  }
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});