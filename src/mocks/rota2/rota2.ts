import express from "express";
import { delay } from "../../api.config";
import { Auth } from "../login-auth/auth";

export class Rota2 {

  static rotaPost(req: express.Request, res: express.Response) {
    const auth = Auth.check(req.get('Authorization'));
    if (!auth.err) {
      res.setHeader('Content-Type', 'application/json');
      const resposta = { chave: 'valor' }
      setTimeout(() => res.send(resposta), delay);
    } else {
      res.status(auth.code).send(auth);
    }
  }
}
