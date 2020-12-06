//Express
import express from 'express';
import { port } from './api.config';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';

//Redirect Mockup
import { Redirect } from './main/redirect';

// Express App
const api: express.Application = express();

// Express Config
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(cors());
const upload = multer();

// Express Routes
api.get('/', (req, res) => res.send('Redirect API on!'));

//Redirect Routes
api.get('/*', Redirect.get);
api.post('/*', Redirect.post);
api.put('/*', Redirect.put);
api.delete('/*', Redirect.delete);

// Express Init - (sempre o último)
api.listen(port, () => console.log(`Redirect API Listening on port ${port}!`));


