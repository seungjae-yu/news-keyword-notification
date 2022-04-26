import { NaverNewsDataObject } from "./../../@types/news-data-type";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { NaverApi } from "../../utils/newsApi/NaverApis";
import * as actions from "../news";
import * as loading from '../loading';

function* apiDataRequestSaga(
    action: ReturnType<typeof actions.APIDataRequestAction>
) {
    yield put(loading.LoadingStartAction());
    try {
        const data: NaverNewsDataObject = yield call(
            NaverApi.getNewsInfo,
            action.payload.data
        );
        const tmp = { ...data.data, keywordInfo: action.payload.keywordInfo };
        yield put(actions.APIDataRequestSuccessAction([tmp]));
        yield put(loading.LoadingFinishAction());
    } catch (error) {
        if (error instanceof Error) {
            yield put(actions.APIDataRequestFailAction(error.message));
            yield put(loading.LoadingFinishAction());
        }
    }
}

export function* newsApiSaga() {
    yield takeEvery(actions.API_DATA_REQUEST, apiDataRequestSaga);
}

export default function* rootSaga() {
    yield all([newsApiSaga()]);
}
