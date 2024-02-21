import exphbs from 'express-handlebars';
import conn from './db/conn.mjs'
import express from 'express';
// Models
import Task from './models/Task.mjs';


const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Ponte para os arquivos estáticos
app.use(express.static('public'));

conn
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err))
