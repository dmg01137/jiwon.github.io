const express = require('express');
const app = express();
const fs = require('fs');

app.post('/save-memo', (req, res) => {
    const memoContent = req.body.memoContent;
    fs.appendFileSync('memos.txt', memoContent + '\n');
    res.send('메모가 저장되었습니다.');
});

app.listen(3000, () => {
    console.log('서버가 실행 중입니다.');
});
