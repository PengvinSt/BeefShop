import "./page.css";
import "./reused.css"
import Header from "./components/header";
import Footer from "./components/footer";
import ToTopButton from "./components/button/toTopButton";
import Preload from "./components/preload";

export default function Home() {
  return (
    <>
      <Header/>

      <main>
      <article>
        {/* <!-- - #HERO--> */}

        <section className="hero" id="home">
          <div className="container">
            <div className="hero-content">
              <p className="hero-subtitle">Світ ідеальних смаків</p>

              <h2 className="h1 hero-title">
                Подаруємо вам вишуканість аргентинської яловичини
              </h2>

              <button className="btn">
                <a href="#products">Наша продукція</a>
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
        {/* <!-- - #ABOUT--> */}

        <section className="section section-divider gray about" id="about">
          <div className="container">
            <div className="about-banner">
              <img
                src="/images/1-min.png"
                width="509"
                height="459"
                loading="lazy"
                alt="DarGusto Даргусто стейки"
                className="w-100 about-img"
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
                  {/* <ion-icon name="checkmark-outline"></ion-icon> */}

                  <span className="span">Чорний Ангус</span>
                </li>

                <li className="about-item">
                  {/* <ion-icon name="checkmark-outline"></ion-icon> */}

                  <span className="span">Герефорд</span>
                </li>

                <li className="about-item">
                  {/* <ion-icon name="checkmark-outline"></ion-icon> */}

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
        {/* <!--  --> */}

        {/* <!-- PARTNERS --> */}
        <section className="section section_partners">
          <div className="container">
            <h2 className="h2 section-title">
              Наші
              <span className="span">партнери</span>
            </h2>
            {/* <div className="slider">
              <div><a href="https://famiglia.com.ua/vino-e-cucina/" target="_blank"><img src="/images/logo_partners/1.png" alt="Партнер Vino-e-cucina Ресторан"></a></div>
              <div><a href="https://zhar-i-myaso.choiceqr.com/" target="_blank"><img src="/images/logo_partners/2.png" alt="Партнер Жаримясо Ресторан" ></a></div>
              <div><a href="https://www.instagram.com/oxotanaovets/" target="_blank"><img src="/images/logo_partners/3.png" alt="Партнер Охота на овец Ресторан" ></a></div>
              <div><a href="https://beef.kyiv.ua/" target="_blank"><img src="/images/logo_partners/4.png" alt="Партнер Beef Kiyv Ресторан" ></a></div>
              <div><a href="https://biarritz.rest/" target="_blank"><img src="/images/logo_partners/5.png" alt="Партнер Біаріц Biaritz Ресторан" ></a></div>
              <div><a href="https://www.hyatt.com/en-US/hotel/ukraine/hyatt-regency-kyiv/kievh/home/Ukrainian" target="_blank"><img src="/images/logo_partners/6.png" alt="Партнер Хаят hyatt Отель" target="_blank"></a></div>
              <div><a href="https://praha-restaurant.com/" target="_blank"><img src="/images/logo_partners/7_new.png" alt="Партнер Прага Ресторан" ></a></div>
              <div><a href="https://www.villa-riviera.com.ua/" target="_blank"><img src="/images/logo_partners/8.png" alt="Партнер Віла Рів'єра Villa Riviera Комплекс" ></a></div>
              <div><a href="https://www.instagram.com/zharimyaso_odesa/" target="_blank"><img src="/images/logo_partners/9.png" alt="Партнер Жаримясо Ресторан" ></a></div>
              <div><a href="https://miteria.com.ua/" target="_blank"><img src="/images/logo_partners/10.png" alt="Партнер мітеріа miteria Ресторан" ></a></div>
              <div><a href="https://tsarske.kiev.ua/ru/" target="_blank"><img src="/images/logo_partners/11.png" alt="Партнер Царське Село Ресторан" ></a></div>
          </div> */}
          </div>
        </section>

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
                  {/* <ion-icon name="checkmark-outline"></ion-icon> */}

                  <span className="span">Ретельна селекція бичків</span>
                </li>

                <li className="about-item">
                  {/* <ion-icon name="checkmark-outline"></ion-icon> */}

                  <span className="span">Годування та умови утримання</span>
                </li>

                <li className="about-item">
                  {/* <ion-icon name="checkmark-outline"></ion-icon> */}

                  <span className="span">М&apos;ясообробка</span>
                </li>

                <li className="about-item">
                  {/* <ion-icon name="checkmark-outline"></ion-icon> */}

                  <span className="span">Сертифікація</span>
                </li>

                <li className="about-item">
                  {/* <ion-icon name="checkmark-outline"></ion-icon> */}

                  <span className="span">Доставка</span>
                </li>
              </ul>

              <button className="btn btn-hover">
                <a href="#call_us">Замовити зараз</a>
              </button>
            </div>

            <div className="about-banner-second">
              <img
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
            <img src="/images/quality2.png" alt="DarGusto Даргусто якість і вишуканість качество стейков" />
            <img src="/images/quality4.png" alt="DarGusto Даргусто якість і вишуканість качество стейков" />
            <img src="/images/quality1.png" alt="DarGusto Даргусто якість і вишуканість качество стейков" />
            <img src="/images/quality3.png" alt="DarGusto Даргусто якість і вишуканість качество стейков" />
            <img src="/images/quality5.png" alt="DarGusto Даргусто якість і вишуканість качество стейков" />
            <img src="/images/quality6.png" alt="DarGusto Даргусто якість і вишуканість качество стейков" />
          </section>
        </div>
      </section>

        {/* <!-- - #FOOD MENU--> */}

        <section className="section food-menu" id="products">
          <div className="container">
            <p className="section-subtitle">
              DarGusto - гармонія неперевершених смаків
            </p>
            <h2 className="h2 section-title">
              Вибір
              <span className="span">стейків</span>
            </h2>
            <ul className="food-menu-list">
              <li>
                <div className="food-menu-card">
                  <div className="card-banner">
                    <img
                      src="/images/Tenderloin_lomo1.png"
                      width="300"
                      height="300"
                      loading="lazy"
                      alt="DarGusto Даргусто Заказати Tenderloin Lomo Con Cordon Вирізка Відруб Мармурована Яловичина"
                      className="w-100"
                    />
                    <button className="btn food-menu-btn">
                      <a href="#call_us">Замовити</a>
                    </button>
                  </div>

                  <div className="wrapper">
                    <p className="category">Tenderloin Con Cordon</p>

                    <div className="rating-wrapper">
                      {/* <!-- <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon> -->
                      <!-- <div class="category">Витриманий*</div> --> */}
                    </div>
                  </div>

                  <h3 className="h3 card-title">Вирізка Відруб</h3>

                  <div className="price-wrapper">
                    <p className="price-text">Ціна:</p>

                    <data className="price">від 1566 грн / кг </data>
                  </div>
                </div>
              </li>

              <li>
                <div className="food-menu-card">
                  <div className="card-banner">
                    <img
                      src="/images/lomo-sin-cordon.png"
                      width="300"
                      height="300"
                      loading="lazy"
                      alt="DarGusto Даргусто Tenderloin Sin Cordon lomo вирізка відруб витриманий Заказати"
                      className="w-100"
                    />
                    <button className="btn food-menu-btn">
                      <a href="#call_us">Замовити</a>
                    </button>
                  </div>

                  <div className="wrapper">
                    <p className="category">Tenderloin Sin Cordon</p>

                    <div className="rating-wrapper">
                      <div className="category">Витриманий*</div>
                    </div>
                  </div>

                  <h3 className="h3 card-title">Вирізка Відруб (зачищена)</h3>

                  <div className="price-wrapper">
                    <p className="price-text">Ціна:</p>

                    <data className="price">від 1596 грн / кг </data>
                  </div>
                </div>
              </li>
              

              <li>
                <div className="food-menu-card">
                  <div className="card-banner">
                    <img
                      src="/images/Bife_Ancho.png"
                      width="300"
                      height="300"
                      loading="lazy"
                      alt="DarGusto Даргусто Bife Ancho Sin Tapa, Con Cordon | Рібай Відруб Cube Roll Замовити"
                      className="w-100"
                    />

                    {/* <!-- <div class="badge">-20%</div> --> */}

                    <button className="btn food-menu-btn">
                      <a href="#call_us">Замовити</a>
                    </button>
                  </div>

                  <div className="wrapper">
                    <p className="category">Rib EYE Cube Roll Sin Tapa, Sin Cordon</p>

                    <div className="rating-wrapper">
                    </div>
                  </div>

                  <h3 className="h3 card-title">Рібай Відруб</h3>

                  <div className="price-wrapper">
                    <p className="price-text">Ціна:</p>

                    <data className="price" value="1512 ">від 1560 грн / кг </data>

                    {/* <!-- <del className="del">$1850</del> --> */}
                  </div>
                </div>
              </li>


              <li>
                <div className="food-menu-card">
                  <div className="card-banner">
                    <img
                      src="/images/striploin.png"
                      width="300"
                      height="300"
                      loading="lazy"
                      alt="DarGusto Даргусто Стріплойн Відруб Bife Angosto StripLoin Con Cordon Замовити"
                      className="w-100"
                    />

                    {/* <!-- <div class="badge">-15%</div> --> */}

                    <button className="btn food-menu-btn">
                      <a href="#call_us">Замовити</a>
                    </button>
                  </div>

                  <div className="wrapper">
                    <p className="category">StripLoin Con Cordon</p>

                    <div className="rating-wrapper">
                    </div>
                  </div>

                  <h3 className="h3 card-title">Стріплоін Відруб</h3>

                  <div className="price-wrapper">
                    <p className="price-text">Ціна:</p>

                    <data className="price" value="1356">від 1458 грн / кг </data>

                    {/* <!-- <del class="del">$1850</del> --> */}
                  </div>
                </div>
              </li>
              
              <li>
                <div className="food-menu-card">
                  <div className="card-banner">
                    <img
                      src="/images/striploinsteak.png"
                      width="300"
                      height="300"
                      loading="lazy"
                      alt="DarGusto Даргусто Стріплойн Стейк StripLoin Con Cordon Bife Angosto Замовити"
                      className="w-100"
                    />

                    {/* <!-- <div class="badge">-15%</div> --> */}

                    <button className="btn food-menu-btn">
                      <a href="#call_us">Замовити</a>
                    </button>
                  </div>

                  <div className="wrapper">
                    <p className="category">StripLoin Con Cordon</p>

                    <div className="rating-wrapper">
                      <div className="category">Витриманий*</div>
                    </div>
                  </div>

                  <h3 className="h3 card-title">Стріплоін Відруб</h3>

                  <div className="price-wrapper">
                    <p className="price-text">Ціна:</p>

                    <data className="price" value="1428">від 1458 грн / кг </data>

                    {/* <!-- <del class="del">$1850</del> --> */}
                  </div>
                </div>
              </li>
              
              <li>
                <div className="food-menu-card">
                  <div className="card-banner">
                    <img
                      src="/images/tenderloin-file.png"
                      width="300"
                      height="300"
                      loading="lazy"
                      alt="DarGusto Даргусто Tenderloin Філе Мінйон Стейк Порційний Заказати"
                      className="w-100"
                    />

                    {/* <!-- <div className="badge">-25%</div> --> */}

                    <button className="btn food-menu-btn">
                      <a href="#call_us">Замовити</a>
                    </button>
                  </div>

                  <div className="wrapper">
                    <p className="category">Tenderloin</p>

                    <div className="rating-wrapper">
                        <div className="category">Витриманий*</div>
                    </div>
                  </div>

                  <h3 className="h3 card-title">Філе Міньон | Стейк Порційний</h3>

                  <div className="price-wrapper">
                    <p className="price-text">Ціна:</p>

                    <data className="price" value="2950">2950 грн / кг </data>

                    {/* <!-- <del class="del">$1850</del> --> */}
                  </div>
                </div>
              </li>
              
              <li>
                <div className="food-menu-card">
                  <div className="card-banner">
                    <img
                      src="/images/cuberoll.png"
                      width="300"
                      height="300"
                      loading="lazy"
                      alt="DarGusto Даргусто Bife Ancho Sin Tapa, Sin Cordon Рібай Cube Roll Стейк Порційний Замовити"
                      className="w-100"
                    />

                    {/* <!-- <div class="badge">-5%</div> --> */}

                    <button className="btn food-menu-btn">
                      <a href="#call_us">Замовити</a>
                    </button>
                  </div>

                  <div className="wrapper">
                    <p className="category">Rib EYE Cube Roll Sin Tapa, Sin Cordon</p>

                    <div className="rating-wrapper">
                      <div className="category">Витриманий*</div>
                    </div>
                  </div>

                  <h3 className="h3 card-title">Рібай Стейк Порційний</h3>

                  <div className="price-wrapper">
                    <p className="price-text">Ціна:</p>

                    <data className="price" value="1632">від 1632 грн / кг </data>

                    {/* <!-- <del class="del">$1850</del> --> */}
                  </div>
                </div>
              </li>
              
              <li>
                <div className="food-menu-card">
                  <div className="card-banner">
                    <img
                      src="/images/newyork.png"
                      width="300"
                      height="300"
                      loading="lazy"
                      alt="DarGusto Даргусто Нью-Йорк Стейк | Bife Ancho Con Замовити"
                      className="w-100"
                    />

                    {/* <!-- <div class="badge">-15%</div> --> */}

                    <button className="btn food-menu-btn">
                      <a href="#call_us">Замовити</a>
                    </button>
                  </div>

                  <div className="wrapper">
                    <p className="category">StripLoin Con Tapa</p>

                    <div className="rating-wrapper">
                        <div className="category">Витриманий*</div>
                    </div>
                  </div>

                  <h3 className="h3 card-title">
                    Нью-Йорк Стейк Порційний
                  </h3>

                  <div className="price-wrapper">
                    <p className="price-text">Ціна:</p>

                    <data className="price" value="1632">від 1632 грн / кг </data>

                    {/* <!-- <del class="del">$1850</del> --> */}
                  </div>
                </div>
              </li>
              
              <li>
                <div className="food-menu-card">
                  <div className="card-banner">
                    <img
                      src="/images/striploinsteak.png"
                      width="300"
                      height="300"
                      loading="lazy"
                      alt="DarGusto Даргусто Стріплойн Стейк StripLoin Con Cordon Bife Angosto Замовити"
                      className="w-100"
                    />

                    {/* <!-- <div class="badge">-15%</div> --> */}

                    <button className="btn food-menu-btn">
                      <a href="#call_us">Замовити</a>
                    </button>
                  </div>

                  <div className="wrapper">
                    <p className="category">StripLoin Con Cordon</p>

                    <div className="rating-wrapper">
                      <div className="category">Витриманий*</div>
                    </div>
                  </div>

                  <h3 className="h3 card-title">Стріплоін Стейк Порційний</h3>

                  <div className="price-wrapper">
                    <p className="price-text">Ціна:</p>

                    <data className="price" value="1518">від 1518 грн / кг </data>

                    {/* <!-- <del class="del">$1850</del> --> */}
                  </div>
                </div>
              </li>






            </ul>
          </div>
        </section>

        {/* <!-- - #DELIVERY--> */}

        <section className="section section-divider about" id="delivery"
        style={{background:"#00593f"}}>
          <div className="container">
            <div className="about-content">
              <h2 className="h2 section-title">
                Найкраща
                <span className="span">яловичина</span>
                для вас!
              </h2>

              <p className="section-text">
                Неперевершена яловичина, яка дарує справжній смак і насолоду. Ми
                доставляємо по всій Україні, а для наших клієнтів з Києва -
                доставка безкоштовна. Ви заслуговуєте найкращого!
              </p>

              <p className="delivery-text">Доставка по Києву безкоштовна</p>

              <ul className="about-list">
              <button className="btn btn-hover">
                <a href="#call_us">Зробити замовлення</a>
              </button>
              </ul>
            </div>

            <div className="about-banner-second">
              <img
                src="/images/delivery.png"
                loading="lazy"
                alt="DarGusto Даргусто доставка стейки"
                className="w-100 about-img"
              />
            </div>
          </div>
        </section>

        {/* <!-- - #Gallery--> */}

        <section className="section section-divider gray banner" id="gallery">
          <div className="container">
            <ul className="banner-list">
              <li className="banner-item banner-lg">
                <div className="banner-card">
                  <img
                    src="/images/ribyey.jpg"
                    height="450"
                    loading="lazy"
                    alt="DarGusto Даргусто Вкусное мясо доставка Киев"
                    className="banner-img"
                  />

                  <div className="banner-item-content">
                  </div>
                </div>
              </li>

              <li className="banner-item banner-sm">
                <div className="banner-card">
                  <img
                    src="/images/hero2.jpg"
                    width="550"
                    height="465"
                    loading="lazy"
                    alt="DarGusto Даргусто Вкусное мясо доставка Киев"
                    className="banner-img"
                  />

                  <div className="banner-item-content">
                  </div>
                </div>
              </li>

              <li className="banner-item banner-sm">
                <div className="banner-card">
                  <img
                    src="/images/hero1.jpg"
                    width="550"
                    height="465"
                    loading="lazy"
                    alt="DarGusto Даргусто смачні стейки мясо доставка Киев"
                    className="banner-img"
                  />

                  <div className="banner-item-content">
                  </div>
                </div>
              </li>

              <li className="banner-item banner-md">
                <div className="banner-card">
                  <img
                    src="/images/stakebg.jpg"
                    width="550"
                    height="220"
                    loading="lazy"
                    alt="DarGusto Даргусто смачні стейки мясо доставка Киев"
                    className="banner-img"
                  />

                  <div className="banner-item-content">
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* <!-- - #CALL_US--> */}
        <section className="section_contact" id="call_us">
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

      {/* <Preload/> */}
      {/* <ToTopButton/> */}
    </>
  );
}

