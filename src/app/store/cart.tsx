import {makeAutoObservable} from 'mobx'
import AppStore from './app';
import { redirect } from 'next/navigation';

export type ICart = {
    price: number,
    amount: number,
    name: string
}

export default class CartStore {

    constructor(private store: AppStore) {
        makeAutoObservable(this);
    }

    cart:ICart[] = []

    acceptedCart: { product:ICart[], allPrice:number } | undefined;

    clearCart(){
        this.cart = []
    }

    clearAcceptCart(){
        this.acceptedCart = undefined;
        if (typeof window !== "undefined") {
            localStorage.removeItem('accept_cart_info')       
        }    
    }

    setAcceptedCart(cart:{ product:ICart[], allPrice:number }):void {
        this.acceptedCart = cart
    }

    updateLocalStorage(){
        if (typeof window !== "undefined") {
            localStorage.setItem('cart_info', JSON.stringify(this.cart))
        }
    }

    updateLocalStorageAccept(allPrice: number){
        const data:{ product:ICart[], allPrice:number } = {
            product:this.cart,
            allPrice
        }
        if (typeof window !== "undefined") {
            localStorage.setItem('accept_cart_info', JSON.stringify(data))
        }
    }

    fillCartOnce(cart:ICart){
        this.cart.push(cart)
        this.updateLocalStorage()
    }

    fillCartFull(cart:ICart[]){
        this.cart = cart
    }

    deleteByIndex(index:number){
        this.cart.splice(index,1)
        this.updateLocalStorage()
    }

    updateAmmountByIndex(index:number) {
        this.cart[index] = {
            ...this.cart[index],
            amount: this.cart[index].amount +1
        }
        this.updateLocalStorage()
    }
    
    acceptCart(){
        let price = 0;
        this.cart.map(cart => {
            for (let i = 0; i < cart.amount; i++){
                price += Number(cart.price)
            }
        })
        this.updateLocalStorageAccept(price)
        if (typeof window !== "undefined") {
            localStorage.removeItem('cart_info')
        }
        this.clearCart()
    }

    addToCart(item: {price: number, name: string}) {
        const index = this.cart.map((c)=> c.name).indexOf(item.name);
        if(index === -1) {
            this.fillCartOnce({...item, amount:1})
            return
        }

        this.updateAmmountByIndex(index)
        return
    }
    deleteFromCart(name: string) {
        const index = this.cart.map((c)=> c.name).indexOf(name);
        if(index === -1) return

        if(this.cart[index].amount <2) {
            this.deleteByIndex(index)
            return
        }
        
        this.cart[index] = {
            ...this.cart[index],
            amount: this.cart[index].amount -1
        }
        this.updateLocalStorage()
        return
    }
}