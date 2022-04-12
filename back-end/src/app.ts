import axios from 'axios';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();
app.listen(process.env.PORT || 5001);
app.use(cors());
app.use(express.json());

app.post('/article', async (req: Request, res: Response) => {
    const query = `https://openapi.naver.com/v1/search/news.json`;
    const body = req.body;
    console.log(body);

    const result = await axios.get(query, {
        params: {
            display: body.display || 10,
            query: body.query,
            sort: body.sort || "date"
        },
        headers: {
            "X-Naver-Client-Id": body["X-Naver-Client-Id"],
            "X-Naver-Client-Secret": body["X-Naver-Client-Secret"]
        },
    });
    res.send(result.data);
});