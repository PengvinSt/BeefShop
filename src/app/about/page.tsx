import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import "../page.css";
import "../reused.css"
import { FaCheck } from "react-icons/fa";

type IPartners = {
    href: string,
    title: string,
    src:string
}

type IQuality = {
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

const quality:IQuality[] = [
    {
        src:"/images/quality2.png",
    },
    {
        src:"/images/quality4.png",
    },
    {
        src:"/images/quality1.png",
    },
    {
        src:"/images/quality3.png",
    },
    {
        src:"/images/quality5.png",
    },
    {
        src:"/images/quality6.png",
    },
]

export default function About() {
  return (
    <>
    <Header/>
    <main>
      <article>
      {/* <!-- - #ABOUT--> */}
        <section className="margin-start section section-divider gray about" id="about">
        <div className="container">
            <div className="about-banner">
                <Image
                src="/images/1-min.png"
                alt="DarGusto Даргусто стейки"
                width={509}
                height={459}
                className="w-100 about-img"
                loading="lazy"
                />
            </div>
            <div className="about-content">
                <h2 className="h2 section-title">
                Наша історія:
                <span className="span">Смак та якість Аргентини</span>
                </h2>
                <p className="section-text">
                Компанія розташована в прекрасному місті - Мардель Плата,
                провінція Буенос-Айрес. Тут, у серці аргентинської гастрономії,
                ми створюємо неповторні уподобання, надаючи вам можливість
                насолодитися автентичними стейками найвищої якості. Ми пишаємося
                тим, що використовуємо м&apos;ясо добірних сортів, включаючи:
                </p>
                <ul className="about-list">
                <li className="about-item">
                    <FaCheck/>
                    <span className="span">Чорний Ангус</span>
                </li>

                <li className="about-item">
                    <FaCheck/>
                    <span className="span">Герефорд</span>
                </li>

                <li className="about-item">
                    <FaCheck/>
                    <span className="span">Лімузин</span>
                </li>
                </ul>
                <button className="btn btn-hover">
                <a href="#call_us">Замовити зараз</a>
                </button>
            </div>      
        </div>
        </section>
      {/* <!-- YOUTUBE --> */}
        <section className="section section-divider gray" id="about">
          <div className="container">
            <div className="embeded-responsive">
              <iframe
                src="https://www.youtube.com/embed/ktSHmtUk6fE?autoplay=1&vq=hd1080"
                title="Promo"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      {/* <!-- PARTNERS --> */}
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
      {/* <!-- - #ABOUT 2--> */}
        <section className="section section-divider gray about" id="about1">
            <div className="container">
                <div className="about-content">
                    <h2 className="h2 section-title">
                    Гарантія якості найкращих
                    <span className="span">стейків</span>
                    </h2>
                    <p className="section-text">
                    Пропонуємо вам стейки найкращої якості, і не перестаємо
                    докладати зусиль, щоб ця якість завжди залишалася на найвищому
                    рівні. Наші стейки постійно проходять через строгий процес
                    перевірки та сертифікації, щоб гарантувати їхню бездоганну
                    якість на кожному етапі. Кожна партія яловичини, яку ми
                    використовуємо, проходить кілька ступенів перевірки в Аргентині:
                    </p>
                    <ul className="about-list">
                        <li className="about-item">
                        <FaCheck/>

                        <span className="span">Ретельна селекція бичків</span>
                        </li>

                        <li className="about-item">
                        <FaCheck/>

                        <span className="span">Годування та умови утримання</span>
                        </li>

                        <li className="about-item">
                        <FaCheck/>

                        <span className="span">М&apos;ясообробка</span>
                        </li>

                        <li className="about-item">
                        <FaCheck/>

                        <span className="span">Сертифікація</span>
                        </li>

                        <li className="about-item">
                        <FaCheck/>

                        <span className="span">Доставка</span>
                        </li>
                    </ul>
                    <button className="btn btn-hover">
                        <a href="#call_us">Замовити зараз</a>
                    </button>
                </div>
                <div className="about-banner-second">
                    <Image
                        src="/images/2-min.png"
                        width="509"
                        height="459"
                        loading="lazy"
                        alt="DarGusto Даргусто стейки"
                        className="w-100 about-img"
                    />
                </div>
            </div>
        </section>
      {/* <!-- - #QUALITY--> */}
        <section className="section_quality">
        <div className="container">
            <section className="quality-logos">
                {quality.map((quality,i) =>
                    <Image
                    key={i}
                    src={quality.src}
                    alt="DarGusto Даргусто якість і вишуканість качество стейков"
                    width={120}
                    height={120}
                    loading="lazy"
                    />
                )}
            </section>
        </div>
        </section>
      </article>
    </main>
    <Footer/>
    </>
  )
}
