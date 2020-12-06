
import express from 'express';
import { delay } from '../../api.config';
const path = require("path");


export class AssetsExport {

  static exportFiles = (req: express.Request, res: express.Response) => {
    setTimeout(() => res.sendFile(path.join(__dirname, `../${req.params.param}`)), delay);
  };

}
