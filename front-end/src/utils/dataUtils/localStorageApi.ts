import { saveStorageType } from "../../@types/data-type";

export namespace localStorageApi {
    export function save(key: saveStorageType, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    export function get(key: saveStorageType) {
        return localStorage.getItem(key);
    }
}
