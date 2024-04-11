import express from 'express';
import {getCancion, agregarCancion} from '../queries/consultas.js';

const router = express.Router();

router.get('/', (req,res)=>{
    res.sendFile('../views/index.html')
})

router.post('/cancion', async(req,res)=>{
    const {titulo,artista,tono} = req.body;
    const datos = [titulo,artista,tono]
    const result = await agregarCancion(datos);

    res.json(result);
})

router.get('/canciones', async (req,res)=>{
    const canciones = await getCancion();
    console.log(canciones.rows);
    res.json(canciones);
})

router.put('/cancion',(req,res)=>{
    
})

router.delete('/cancion', async (req,res)=>{
    
})


export default router;