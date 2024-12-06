import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const server = express();

interface Teste {

}

server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
     res.send('Ola, DEV!')
});

export { server };