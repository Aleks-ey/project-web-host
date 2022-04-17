const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const cors = require("cors")
require('dotenv').config()
app.use(cors({origin: 'http://localhost:3000', credentials: true}))
app.use(express.json())
app.use(cookieParser())
//const {SERVER_PORT} = process.env
const port = process.env.SERVER_PORT || 5000;
const path = require('path')

app.get(express.static(path.join(__dirname, '../public/index.html')));

// app.get('/', function (req,res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

const {
    seedUsers,
    newUser,
    login
} = require("./controller/userController")
const {
    getItems,
    getAllOrders
} = require("./controller/itemController")
const {
    seed,
    resetOrders,
    checkoutClick
} = require("./controller/cartController")

app.get("/api/items", getItems)
app.get("/api/orders", getAllOrders)
app.post("/api/login", login)

app.post("/api/seed", seed)
app.post("/api/resetorders", resetOrders)
app.post("/api/seedusers", seedUsers)
app.post("/api/newuser", newUser)

app.post("/api/cart", checkoutClick)

app.listen(port, '0.0.0.0', () => {console.log(`Server started on port ${port}`)})