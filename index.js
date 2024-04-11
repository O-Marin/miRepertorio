import express from 'express';
process.loadEnvFile();
import path from 'path';
import router from './routes/routes.js'

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;

//disponibilizar carpetas public
app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/assets')))

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//rutas
app.use('/', router);


app.listen(PORT, ()=> console.log(`Servidor conectado a puerto: ${PORT}`));

