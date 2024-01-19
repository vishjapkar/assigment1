const express = require("express");
const app = express();
const dotenv = require('dotenv')
const ConnectDatabase = require("./Config/Database")
const bodyParser = require('body-parser');
const ProductsTranjection = require("./router/ProductTranjectionRoute");
const cors = require('cors')

dotenv.config()

// Db connection
ConnectDatabase();
app.use(cors())

// Middleware
app.use(bodyParser.json());

app.get("/",function(req , res){
  res.render("Home.ejs")
});

// Routes
app.use("/api" , ProductsTranjection);

app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})