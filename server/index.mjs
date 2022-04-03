import express from 'express'

const categories = [{
  "id": 0,
  "name": "Бургеры",
  "products": [0, 1, 2, 3, 4, 5, 6]
},
{
  "id": 1,
  "name": "Твистеры",
  "products": [7, 8, 9, 10]
},
{
  "id": 2,
  "name": "Курица",
  "products": [11, 12, 13, 14]
}]

const products = [
{
  "id": 0,
  "name": "Бургер",
  "price": 144,
  "delivery": true,
  "img": "burger.png",
  "new": true,
  "hit": false
},
{
  "id": 1,
  "name": "Бургер",
  "price": 144,
  "delivery": true,
  "img": "burger.png",
  "new": false,
  "hit": true
},
{
  "id": 2,
  "name": "Бургер",
  "price": 144,
  "delivery": true,
  "img": "burger.png",
  "new": false,
  "hit": false
},
{
  "id": 3,
  "name": "Бургер",
  "price": 144,
  "delivery": true,
  "img": "burger.png",
  "new": false,
  "hit": false
},
{
  "id": 4,
  "name": "Бургер",
  "price": 144,
  "delivery": true,
  "img": "burger.png",
  "new": false,
  "hit": false
},
{
  "id": 5,
  "name": "Бургер",
  "price": 144,
  "delivery": true,
  "img": "burger.png",
  "new": false,
  "hit": true
},
{
  "id": 6,
  "name": "Бургер",
  "price": 144,
  "delivery": true,
  "img": "burger.png",
  "new": false,
  "hit": false
},

{
  "id": 7,
  "name": "Твистер",
  "price": 144,
  "delivery": true,
  "img": "twister.png",
  "new": false,
  "hit": true
},
{
  "id": 8,
  "name": "Твистер",
  "price": 144,
  "delivery": true,
  "img": "twister.png",
  "new": false,
  "hit": true
},
{
  "id": 9,
  "name": "Твистер",
  "price": 144,
  "delivery": true,
  "img": "twister.png",
  "new": false,
  "hit": true
},
{
  "id": 10,
  "name": "Твистер",
  "price": 144,
  "delivery": true,
  "img": "twister.png",
  "new": true,
  "hit": false
},

{
  "id": 11,
  "name": "3 стрипса",
  "price": 144,
  "delivery": true,
  "img": "chicken.png",
  "new": false,
  "hit": true
},
{
  "id": 12,
  "name": "3 стрипса",
  "price": 144,
  "delivery": true,
  "img": "chicken.png",
  "new": false,
  "hit": true
},
{
  "id": 13,
  "name": "3 стрипса",
  "price": 144,
  "delivery": true,
  "img": "chicken.png",
  "new": false,
  "hit": false
},
{
  "id": 14,
  "name": "3 стрипса",
  "price": 144,
  "delivery": true,
  "img": "chicken.png",
  "new": false,
  "hit": false
}
]

const app = express()
app.use(express.json())

app.get('/data.json', (req, res) => {
  return res.json({ categories, products })
})

app.post('/basket', (req, res) => {
  console.log(req.body)
  res.send('ok')
})

app.use(express.static('public'))
app.listen(8080)
