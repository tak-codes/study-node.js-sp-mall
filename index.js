const express = require('express')
const app = express()
const port = 3000

const goodsRouter = require('./routes/goods')
const userRouter = require('./routes/user')

//아래 2줄이 body를 편하게 쓰기위한 2가지 방법!
//express.json() , express.urlencoded 
//마지막 줄은 static 추가! 정적 파일을 제공하기 쉽게!

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'));

app.use('/goods', goodsRouter)
app.use('/user', userRouter)


//아래 두단락이 미들웨어!
app.use((req, res, next) => {
  console.log(req);
  next();
});


//아래는 ejs 를 사용하기위한 문법 

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
  let name = req.query.name;
  res.render('test', {name});
})

app.get('/', (req, res) => {
  res.send('<!DOCTYPE html>\
  <html lang="en">\
  <head>\
      <meta charset="UTF-8">\
      <meta http-equiv="X-UA-Compatible" content="IE=edge">\
      <meta name="viewport" content="width=device-width, initial-scale=1.0">\
      <title>Document</title>\
  </head>\
  <body>\
      Hi. I am with html<br>\
      <a href="/hi">Say Hi!</a>\
  </body>\
  </html>')
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})