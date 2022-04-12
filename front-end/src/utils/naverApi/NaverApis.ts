import { NaverApiParams } from "../../@types/naverApi-info";
import NaverClientInfo from "../../config/NaverClientInfo.json";
import axios from "axios";

export namespace NaverApi {
    export async function getNewsInfo(param: NaverApiParams) {
        const query = `https://news-keyword-notification.herokuapp.com/article`;

        const result = await axios({
            url: query,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                display: param.display || 10,
                query: param.query,
                sort: param.sort || "date",
                "X-Naver-Client-Id": NaverClientInfo["X-Naver-Client-Id"],
                "X-Naver-Client-Secret":
                    NaverClientInfo["X-Naver-Client-Secret"],
            }
        });
        console.log(result);
        return result;
    }
}
