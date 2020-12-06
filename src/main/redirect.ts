import express from 'express';
import { delay } from '../api.config';

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const TOKEN = 'Bearer token'
const URL_BASE = 'https://url.request.destino';
// const setHeaders = { 'content-type': 'application/json', 'Authorization': TOKEN };

const api = axios.create({
  baseURL: URL_BASE,
  // headers: setHeaders
});

export default api;

export class Redirect {

  static get = (req: express.Request, res: express.Response): void => {
    const reqHeaders = req.headers;

    const urlOriginalRequest = req.originalUrl;
    const apiConfig: AxiosRequestConfig = { headers: reqHeaders.authorization };

    api.get(urlOriginalRequest)
      // api.get(urlOriginalRequest, apiConfig)
      .then((response: AxiosResponse) => {
        setTimeout(() => res.send(response.data), delay);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  static post = (req: express.Request, res: express.Response): void => {

    const reqBody = req.body;
    const reqHeaders = req.headers;

    const urlOriginalRequest = req.originalUrl;
    const apiConfig: AxiosRequestConfig = { headers: reqHeaders.authorization };

    api.post(urlOriginalRequest, reqBody)
      // api.post(urlOriginalRequest, reqBody, apiConfig)
      .then((response: AxiosResponse) => {
        setTimeout(() => res.send(response.data), delay);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err)
      });
  }

  static put = (req: express.Request, res: express.Response): void => {

    const reqBody = req.body;
    const reqHeaders = req.headers;

    const urlOriginalRequest = req.originalUrl;
    const apiConfig: AxiosRequestConfig = { headers: reqHeaders.authorization };

    api.put(urlOriginalRequest, reqBody)
      // api.post(urlOriginalRequest, reqBody, apiConfig)
      .then((response: AxiosResponse) => {
        setTimeout(() => res.send(response.data), delay);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err)
      });
  }

  static delete = (req: express.Request, res: express.Response): void => {

    const reqHeaders = req.headers;

    const urlOriginalRequest = req.originalUrl;
    const apiConfig: AxiosRequestConfig = { headers: reqHeaders.authorization };

    api.delete(urlOriginalRequest)
      // api.post(urlOriginalRequest, apiConfig)
      .then((response: AxiosResponse) => {
        setTimeout(() => res.send(response.data), delay);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err)
      });
  }
}
