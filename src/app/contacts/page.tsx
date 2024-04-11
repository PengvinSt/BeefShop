'use client'
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import "../page.css";
import "../reused.css"
import Preload from "../components/preload";

export default function Contacts() {

  const [isLoading, setIsLoading] = useState(true)
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
                <input id="fromName" type="text" className="field" placeholder="Ім'я *" required/>
                <input id="email" type="email" className="field" placeholder="Email" />
                <input id="number" type="text" className="field" placeholder="Номер телефону *" required/>
                <textarea id="message"
                  placeholder="Повідомлення"
                  className="field"
                  style={{resize:"vertical"}}
                ></textarea>
                <button className="btn">Відправити</button>
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
