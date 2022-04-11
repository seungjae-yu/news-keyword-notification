import { NaverNewsDataObject } from './../../@types/news-data-type';
import { all, call, put, takeEvery } from "redux-saga/effects";
import { NaverApi } from "../../utils/naverApi/NaverApis";
import * as actions from "../news";

function* apiDataRequestSaga(action: ReturnType<typeof actions.APIDataRequestAction>) {
    try {
        const data: NaverNewsDataObject = yield call(NaverApi.getNewsInfo, action.payload.data);
        const tmp = { ...data.data, ...action.payload.keywordInfo }
        yield put(actions.APIDataRequestSuccessAction([tmp]));

    } catch (error) {
        if (error instanceof Error) {
            yield put(actions.APIDataRequestFailAction(error.message));
        }
    }
}

export function* newsApiSaga() {
    yield takeEvery(actions.API_DATA_REQUEST, apiDataRequestSaga);
}

export default function* rootSaga() {
    yield all([newsApiSaga()]);
}