import { Rota1 } from './mocks/rota1/rota1';
//Express
import express from 'express';
import { port } from './api.config';
import cors from 'cors';
import bodyParser from 'body-parser';

//Redirect Mockup
// import { Redirect } from './main/redirect';
import { Rota2 } from './mocks/rota2/rota2';

// Express App
const api: express.Application = express();

// Express Config
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(cors());

// Express Routes
api.get('/', (req, res) => res.send('Redirect API on!'));

api.get('/rota1', Rota1.rotaGet);
api.post('/rota2', Rota2.rotaPost);

// //Redirect Routes
// api.get('/*', Redirect.get);
// api.post('/*', Redirect.post);
// api.put('/*', Redirect.put);
// api.delete('/*', Redirect.delete);

// Express Init - (sempre o último)
api.listen(port, () => console.log(`Redirect API Listening on port ${port}!`));
