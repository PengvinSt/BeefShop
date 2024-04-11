'use client'
import "./page.css";
import "./reused.css"
import Header from "./components/header";
import Footer from "./components/footer";
import Preload from "./components/preload";
import { useEffect, useState } from "react";
import { observer } from "mobx-react";

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
        </article>
      </main>
      <Footer/>
    </>
  )
}

export default observer(Home);