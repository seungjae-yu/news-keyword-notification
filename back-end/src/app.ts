import express, { Request, Response, NextFunction } from 'express';

const app = express();
app.listen(process.env.PORT || 5001);

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello test');
});

app.get('/naverApi', (req: Request, res: Response) => {
    console.log(req.body);
    //https://openapi.naver.com/api/v1/search/news.json
});