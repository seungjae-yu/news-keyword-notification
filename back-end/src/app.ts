import express, { Request, Response, NextFunction } from 'express';

const app = express();
app.listen(process.env.PORT || 5000);

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello test');
});