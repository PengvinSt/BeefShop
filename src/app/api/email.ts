import AppStore from "../store/app";
import AppApi from "./app";
import emailjs from '@emailjs/browser';

export default class EmailApi {
    constructor(private api: AppApi, private store: AppStore) {}

    apiKey:string = 'xs9UYaMsCof-0Vjko'
    emailInit(){
        emailjs.init(this.apiKey);
    }

    emailSendContact(params: {from_name:string, client_number:string, client_message?:string}, uId?:string):void{
        // emailjs.send("service_h3gxuce", "template_mavmg7j", params).then(
        //     function () {
        //       alert("Ваше повідомлення відправлено! Менеджер зв'яжеться з вами якнайшвидше!");
        //     }
        //   );
        console.log('Done')
        if(uId){
            alert("Ваше замовлення відправлено! Менеджер зв'яжеться з вами якнайшвидше!");
            alert(`Унікальний ідентифікатор замовлення ${uId}, будь ласка запам'ятайте його!`);
            console.log(params)
            this.store.cart.clearAcceptCart()
        }else {
            alert("Ваше повідомлення відправлено! Менеджер зв'яжеться з вами якнайшвидше!");
            console.log(params)
        }
       
        
          
    }
}