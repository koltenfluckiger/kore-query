declare interface Options {
    baseurl: string;
}
import { AxiosInstance, CreateAxiosDefaults } from "axios";
declare class Korios {
    axios: AxiosInstance;
    _getInstance(): Korios;
    create(options: CreateAxiosDefaults<any>): void;
    setBaseurl(options: Options): void;
    setDefaults(options: Options): void;
    setHeaders(headers: object): void;
    asyncerrator(options?: {}): () => Promise<any>;
    request(options?: {}): Promise<Object>;
    get(url: string, { params, headers, options }?: {
        params?: {};
        headers?: {};
        options?: {};
    }): Promise<Object>;
}
declare const _default: Korios;
export default _default;
