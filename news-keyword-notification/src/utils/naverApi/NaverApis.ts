import { NaverApiParams } from "../../@types/naverApi-info";
import NaverClientInfo from "../../config/NaverClientInfo.json";
import axios from "axios";

export namespace NaverApi {
    export async function getNewsInfo(param: NaverApiParams) {
        const query = `api/v1/search/news.json`;
        const result = await axios.get(query, {
            params: {
                display: param.display || 10,
                query: param.query,
                sort: param.sort || "date"
            },
            headers: {
                "X-Naver-Client-Id": NaverClientInfo["X-Naver-Client-Id"],
                "X-Naver-Client-Secret":
                    NaverClientInfo["X-Naver-Client-Secret"],
            },
        });
        return result;
    }
}
