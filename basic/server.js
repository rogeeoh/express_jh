const express = require('express');
const app = express();
// index.js는 생략이 가능
const indexRouter = require('./routes');
const apiRouter = require('./routes/api');

app.use(indexRouter);
app.use('/api/v1', apiRouter);

app.listen(3000, () => {
    console.log('express is running at port 3000');
});
