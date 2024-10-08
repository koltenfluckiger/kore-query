"use strict";

declare interface Options {
  baseurl: string;
}

import axios, {AxiosInstance, CreateAxiosDefaults} from "axios";

class Korios {
  public axios: AxiosInstance;

  public _getInstance(): Korios {
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
    return async () => {
      try {
        return await this.axios.request(options);
      } catch (err) {
        return Promise.reject(err);
      }
    };
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
      return await this.axios.get(url, {params, headers, ...options});
    } catch (err) {
      throw err;
    }
  }
}

export default new Korios();
