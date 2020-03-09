var express= require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.json());
app.use(express.static('public'));

app.set("view engine", "pug");

require('./routes')(app);

const port=process.env.PORT || 3000;
console.log(port);
const server=app.listen(port, ()=> console.log(`Listening on port ${port}...`));
var env = process.env.NODE_ENV || 'development';
console.log(env);
module.exports= server;