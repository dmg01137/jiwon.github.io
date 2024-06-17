const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// JSON 파싱을 위한 미들웨어 등록
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 정적 파일을 제공하기 위한 미들웨어 등록
app.use(express.static('public'));

// 비밀번호 확인 라우트
app.post('/unlock', (req, res) => {
    const { password } = req.body;
    if (password === "1234") {
        res.json({ success: true, message: "Unlock successful" });
    } else {
        res.status(401).json({ success: false, message: "Incorrect password" });
    }
});

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
