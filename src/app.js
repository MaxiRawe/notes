const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');



//ROUTES
const mainRouter = require('./routes/main');
const detailRouter = require('./routes/detail');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//VIEW ENGINE SETUP
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//ACCESS TO PUBLIC
app.use(express.static(path.join(__dirname, '../public')));

//RESOURCES
app.use('/', mainRouter);
app.use('/detail', detailRouter);


app.listen(process.env.PORT || 3000, function(){
    console.log('http://localhost:3000');
});