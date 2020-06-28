import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import connectToDatabase from './database/mongoConnection';

import todoRouter from './routes/todo.route';

class App {
    public app: Application;

    constructor() {
        this.app = express();

        this.setConfig();
        this.setRoutes();
    }

    async setConfig() {
        dotenv.config();
        connectToDatabase();

        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        this.app.use(cors());

        // Desabilita os logs no ambiente de testes, para manter o terminal limpo
        // apenas com informações relacionadas aos testes que estão sendo executados
        if (process.env.PRODUCTION) {
            this.app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
        }

        this.app.use(this.globalErrorHandler);
    }

    setRoutes(): void {
        this.app.use('/todo', todoRouter);
    }

    globalErrorHandler(err: Error, req: Request, res: Response, next: Function) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    }
}

export default new App().app;