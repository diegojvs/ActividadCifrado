const { json } = require('express');
const express = require('express');
const app = express();

const morgan = require('morgan');

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/', (req, eroor) => {
    console.log(req.body);
    console.log('recibido');
})

app.listen(app.get('port'), () => {
    console.log('funciona');
})