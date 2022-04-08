export interface NaverApiParams {
    query: string; //검색을 원하는 문자열. UTF-8 인코딩
    display?: number; //검색결과 출력건수 기본값은 10, chleo 100
    start?: number; // 검색시작위치. 1 ~ 1000
    sort?: "sim" | "date"; //기본값은 date. 정렬옵션(sim-유사도, date-날짜)
}
