import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import "../page.css";
import "../reused.css"

type IBaner = {
    banner_size_class: "banner-item banner-md"| "banner-item banner-sm" | "banner-item banner-lg"
    src:string,
    width:number,
    height:number,
    alt:string,
    banner_text:string
}

const baner:IBaner[] = [
    {
        banner_size_class:"banner-item banner-lg",
        src:'/images/ribyey.jpg',
        width:580,
        height:430,
        alt:'DarGusto Даргусто Вкусное мясо доставка Киев',
        banner_text:''
    },
    {
        banner_size_class:"banner-item banner-sm",
        src:'/images/hero2.jpg',
        width:550,
        height:465,
        alt:'DarGusto Даргусто Вкусное мясо доставка Киев',
        banner_text:''
    },
    {
        banner_size_class:"banner-item banner-sm",
        src:'/images/hero1.jpg',
        width:550,
        height:465,
        alt:'DarGusto Даргусто смачні стейки мясо доставка Киев',
        banner_text:''
    },
    {
        banner_size_class:"banner-item banner-md",
        src:'/images/stakebg.jpg',
        width:550,
        height:220,
        alt:'DarGusto Даргусто смачні стейки мясо доставка Киев',
        banner_text:''
    }
]

export default function Gallery() {
  return (
    <>
    <Header/>
    <main>
        <article>
        {/* <!-- - #Gallery--> */}
        <section className="margin-start section section-divider gray banner" id="gallery">
          <div className="container">
            <ul className="banner-list">
                {baner.map((baner, i)=> 
                    <li className={baner.banner_size_class} key={i}>
                        <div className="banner-card">
                            <Image
                                src={baner.src}
                                width={baner.width}
                                height={baner.height}
                                loading="lazy"
                                alt={baner.alt}
                                className="banner-img"
                            />
                            <div className="banner-item-content">
                                <p>{baner.banner_text}</p>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
          </div>
        </section>
        </article>
    </main>
    <Footer/>
    </>
  )
}
