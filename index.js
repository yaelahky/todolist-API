const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routerNavigation = require('./src/index');
const morgan = require('morgan');

app.listen(3001, "127.0.0.1", () => {
    console.log("Example app listening localhost:3001");
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use('/', routerNavigation);