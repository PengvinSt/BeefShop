import {makeAutoObservable} from 'mobx'
import AppStore from './app';

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

    clearCart(){
        this.cart = []
    }

    updateLocalStorage(){
        if (typeof document !== "undefined") {
            localStorage.setItem('cart_info', JSON.stringify(this.cart))
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
        console.log(this.cart)
        if (typeof document !== "undefined") {
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