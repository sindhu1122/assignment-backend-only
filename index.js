const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // initialize an app
const routes = require('./routes');

app.use(bodyParser.json()); // parse json

const port = 8000;




app.use('/', routes);



app.use((error, req, res, next) => {
    res.json({
        success: false,
        error,
    })
});

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started on port ${port}`);
    }
})
