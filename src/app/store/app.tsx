import CartStore from "./cart";


export default class AppStore {
    cart = new CartStore(this);
}