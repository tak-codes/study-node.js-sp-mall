const express = require('express')
const app = express()
const port = 3000

const goodsRouter = require('./routes/goods')
const userRouter = require('./routes/user')

app.use('/goods', goodsRouter)

app.use('/user', userRouter)

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})



// 파일 나누기전에는 아래와 같이 일일이 라우터를 적어줘야 하지만 router 파일을 만들어
// 분리를 해주면 좀더 간편하게 파일을 관리할수있습니다.
// 변경점은 app.get -> router.get  및 next, 애로우 함수 제거 입니다.app


// app.get('/goods/list', (req, res) => {
//   res.send('상품 목록 페이지')
// })

// app.get('/goods/detail', (req, res) => {
//   res.send('상품 상세 페이지')
// })

// app.get('/user/login', (req, res) => {
//   res.send('로그인 페이지')
// })

// app.get('/user/register', (req, res) => {
//   res.send('회원가입 페이지')
// })