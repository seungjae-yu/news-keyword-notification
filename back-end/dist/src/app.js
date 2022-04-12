"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.listen(process.env.PORT || 5001);
app.use((0, cors_1.default)());
app.get('/test', (req, res, next) => {
    console.log('hello');
    res.send('hello test');
});
app.post('/article', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `https://openapi.naver.com/api/v1/search/news.json`;
    const param = req.body;
    const result = yield axios_1.default.get(query, {
        params: {
            display: param.display || 10,
            query: param.query,
            sort: param.sort || "date"
        },
        headers: {
            "X-Naver-Client-Id": param["X-Naver-Client-Id"],
            "X-Naver-Client-Secret": param["X-Naver-Client-Secret"]
        },
    });
    console.log('result : ' + JSON.stringify(result));
    res.send(result);
}));
