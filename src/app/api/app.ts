import axios from "axios";
import AppStore from "../store/app";
import ShopApi from "./shop";
import EmailApi from "./email";

export const shopBaseUrl = 'https://beefshop-server-production.up.railway.app'

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