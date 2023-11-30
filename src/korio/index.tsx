"use strict";

declare interface Options {
  baseurl: string;
}

import axios, {AxiosInstance, CreateAxiosDefaults} from "axios";

class Korio {
  public axios: AxiosInstance;

  public _getInstance(): Korio {
    return this;
  }

  public create(options: CreateAxiosDefaults<any>): void {
    this.axios = axios.create({...options});
  }

  public setBaseurl(options: Options): void {
    this.axios.defaults.baseURL = options.baseurl;
  }

  public setDefaults(options: Options): void {
    this.axios.defaults = {...this.axios.defaults, ...options};
  }

  public setHeaders(headers: object): void {
    this.axios.defaults.headers = {
      ...this.axios.defaults.headers,
      ...headers,
    };
  }

  public asyncerrator(options = {}): () => Promise<any> {
    const req = async () => {
      try {
        return await this.axios.request(options);
      } catch (err) {
        return Promise.reject(err);
      }
    };
    return req;
  }

  public async request(options = {}): Promise<Object> {
    try {
      const {data} = await this.axios.request(options);
      return data;
    } catch (err) {
      throw err;
    }
  }

  public async get(
    url: string,
    {params = {}, headers = {}, options = {}} = {}
  ): Promise<Object> {
    try {
      const results = await this.axios.get(url, {params, headers, ...options});
      return results;
    } catch (err) {
      throw err;
    }
  }
}

export default new Korio();
