import axios from "axios";
import AppStore from "../store/app";
import ShopApi from "./shop";
import EmailApi from "./email";

export const shopBaseUrl = 'http://localhost:3001'

export default class AppApi {

    shop: ShopApi;
    email: EmailApi;

    shopConnection = axios.create({
        baseURL:shopBaseUrl
    });

    constructor(store: AppStore) {
        this.shop = new ShopApi(this, store);
        this.email = new EmailApi(this, store);
    }
}