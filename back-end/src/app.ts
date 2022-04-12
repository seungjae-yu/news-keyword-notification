import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello test');
});

app.listen('3000', () => {

});