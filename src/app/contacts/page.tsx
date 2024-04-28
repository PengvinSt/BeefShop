'use client'
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import "../page.css";
import "../reused.css"
import Preload from "../components/preload";
import { useAppContext } from "../utils/context";
import generateRandomId from "../utils/util";

const validatePhoneNumber = (phone:string) => {
  const phoneRegex = /^\+\d{1,12}$/;
  return phoneRegex.test(phone);
}



export default function Contacts() {

  const [isLoading, setIsLoading] = useState(true)

  const [fromName, setFromName] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')

  const { api, store } = useAppContext()

  const sendMessage = async ({fromName, number, message}: {fromName:string, number:string, message?:string})=> {
    if (!fromName || !number) {
      alert("Поля 'Ім'я' та 'Телефон' обов'язкові для заповнення");
      return;
    }
  
    if (number && !validatePhoneNumber(number)) {
      alert('Будь ласка, введіть коректний номер телефону.');
      return;
    }
    if(store.cart.acceptedCart && store.cart.acceptedCart.product){
      let newMsg = 'Список замовлених товарів:\n';
      const uId = generateRandomId(6);
      let newName = `Ім\'я замовника: ${fromName} \n унікальний ідентифікатор замовника: ${uId}`
      store.cart.acceptedCart.product.map((item)=>{
        newMsg += `Назва: ${item.name}, Цына: ${item.price}, Кількість: ${item.amount}\n`;
      })

      let params = {
        from_name: newName,
        client_number: number,
        client_message: newMsg,
      }
      
      await api.email.emailInit()
      api.email.emailSendContact(params, uId)
      return
    }
    let params = {
      from_name: fromName,
      client_number: number,
      client_message: message,
    }
    
    await api.email.emailInit()
    api.email.emailSendContact(params)
    return
  }


  useEffect(()=>{
    setIsLoading(false)
  },[])

  return isLoading ? <Preload/> :(
    <>
    <Header/>
    <main>
      <article>
        {/* <!-- - #CALL_US--> */}
        <section className="margin-start section_contact" id="call_us">
          <div className="container">
            <div className="contact-box">
            <div className="left"></div>
              <div className="right">
                <h2>
                  Залиште ваші контакти і наші менеджери зв’яжуться з вами!
                </h2>
                <input id="fromName" type="text" className="field" placeholder="Ім'я *" onChange={(e)=> setFromName(e.target.value)} value={fromName} required/>
                <input id="number" type="text" className="field" placeholder="Номер телефону (+380...) *" onChange={(e)=> setNumber(e.target.value)} value={number} required/>
                {(store.cart.acceptedCart && store.cart.acceptedCart.product && store.cart.acceptedCart.product.length > 0) 
                ?<div className="container field">
                  {store.cart.acceptedCart.product.map((cart, i)=> 
                  <h4 className="h4" key={i}>{cart.name}, {cart.price} грн/кг, {cart.amount} кг</h4>
                  )}
                  <h4 className="h4">Загальна ціна: {store.cart.acceptedCart.allPrice} грн</h4>
                </div>
                :<textarea id="message"
                placeholder="Повідомлення"
                className="field"
                style={{resize:"vertical"}}
                onChange={(e)=> setMessage(e.target.value)} value={message}
                ></textarea>
                }
                
                <button className="btn" onClick={()=>sendMessage({fromName,number,message})} type="button">Відправити</button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
    <Footer/>
    </>
  )
}
