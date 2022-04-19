import "axios";
import axios, { AxiosInstance, AxiosPromise } from "axios";

export default class Request {
    private axios: AxiosInstance;
    
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://pokeapi.co/api/v2/'
        })
    }

    public get(): Promise<AxiosPromise> {
        return this.axios.get('pokemon/ditto');
    }
}