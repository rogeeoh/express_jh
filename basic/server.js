const express = require('express');
const app = express();
// index.js는 생략이 가능
const indexRouter = require('./routes');
const apiRouter = require('./routes/api');

// TODO(과제): 계산기 api 만들기
// 요구사항 1번: /add, /subtract, /multiply, /divide 라우터 생성, 모듈 분리
// 요구사항 2번: query로 2개의 숫자 입력받기
// 요구사항 3번: /divide 0으로 나누는 오류 예외처리하기
app.use(indexRouter);
app.use('/api/v1', apiRouter);

app.listen(3000, () => {
    console.log('express is running at port 3000');
});
