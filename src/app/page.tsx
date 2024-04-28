'use client'
import "./page.css";
import "./reused.css"
import Header from "./components/header";
import Footer from "./components/footer";
import Preload from "./components/preload";
import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import Image from "next/image";

type IPartners = {
  href: string,
  title: string,
  src:string
}

const partners:IPartners[] = [
  {
      href:"https://famiglia.com.ua/vino-e-cucina/",
      title:"Партнер Vino-e-cucina Ресторан",
      src:"/images/logo_partners/1.png"
  },
  {
      href:"https://zhar-i-myaso.choiceqr.com/",
      title:"Партнер Жаримясо Ресторан",
      src:"/images/logo_partners/2.png"
  },
  {
      href:"https://beef.kyiv.ua/",
      title:"Партнер Beef Kiyv Ресторан",
      src:"/images/logo_partners/4.png"
  },
  {
      href:"https://biarritz.rest/",
      title:"Партнер Біаріц Biaritz Ресторан",
      src:"/images/logo_partners/5.png"
  },
  {
      href:"https://www.hyatt.com/en-US/hotel/ukraine/hyatt-regency-kyiv/kievh/home/Ukrainian",
      title:"Партнер Хаят hyatt Отель",
      src:"/images/logo_partners/6.png"
  },
  {
      href:"https://praha-restaurant.com/",
      title:"Партнер Прага Ресторан",
      src:"/images/logo_partners/7_new.png"
  },
  {
      href:"https://www.villa-riviera.com.ua/",
      title:"Партнер Віла Рів'єра Villa Riviera Комплекс",
      src:"/images/logo_partners/8.png"
  },
  {
      href:"https://www.instagram.com/zharimyaso_odesa/",
      title:"Партнер Жаримясо Ресторан",
      src:"/images/logo_partners/9.png"
  },
  {
      href:"https://miteria.com.ua/",
      title:"Партнер мітеріа miteria Ресторан",
      src:"/images/logo_partners/10.png"
  },
  {
      href:"https://tsarske.kiev.ua/ru/",
      title:"Партнер Царське Село Ресторан",
      src:"/images/logo_partners/11.png"
  }
]

function Home() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    setIsLoading(false)
  },[])

  
  return isLoading ? <Preload/> :(
  <>
      <Header/> 
      <main>
        <article>
        {/* <!-- - #HERO--> */}
          <section className="hero" id="home">
            <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle">Світ ідеальних смаків</p>

                <h2 className="hero-title">
                  Подаруємо вам вишуканість аргентинської яловичини
                </h2>

                <button className="btn">
                  <a href="/products">Наша продукція</a>
                </button>
              </div>
            </div>
            <video
              src="/videos/bull_bg.mp4"
              playsInline
              muted
              autoPlay
              loop
              className="first__video"
            ></video>
          </section>
          <section className="section section_partners">
            <div className="container">
                <h2 className="h2 section-title">Наші партнери</h2>
                <div className="slider">
                    {partners.map((partner,i) =>
                    <div key={i}>
                        <a href={partner.href} target="_blank" rel="noopener" title={partner.title}>
                        <Image
                            src={partner.src}
                            alt={partner.title}
                            width={115}
                            height={116}
                            loading="lazy"
                            />
                        </a>
                    </div>
                    )}   
                </div> 
            </div>  
        </section>
        </article>
      </main>
      <Footer/>
    </>
  )
}

export default observer(Home);