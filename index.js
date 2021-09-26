const express = require('express')
const app = express()
const port = 3000

const goodsRouter = require('./routes/goods')
const userRouter = require('./routes/user')


app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'));

app.use('/goods', goodsRouter)
app.use('/user', userRouter)



app.use((req, res, next) => {
  console.log(req);
  next();
});


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/test', (req, res) => {
  let name = req.query.name;
  res.render('test', {name});
})

app.get('/home', (req, res) => {
  res.render('index');
})

app.get('/detail', (req, res) => {
  res.render('detail');
})

// 몽고디비 / 몽구스 연결 api

const mongoose = require('mongoose');

app.get('/mongodb', async (req, res) => {
    await mongoose.connect('mongodb://localhost/voyage', {
        useNewUrlParser: true, 
        ignoreUndefined: true
    });

		res.send('ok');
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
