import React from 'react'
import Image from "next/image";
import "./footer.css";
import "../reused.css";

export default function Footer() {
  return (
    <footer className="footer" id="contacts">
        <div
        className="footer-top"
        style={{ backgroundImage:"url('/images/footer-illustration.png')"}}
        >
            <div className='container'>
                <div className='footer-brand'>
                    <div>
                        <div className="logo-box">
                            <Image
                            src="/images/logo_footer.png"
                            alt="DarGusto Logo Даргусто Лого"
                            width={96}
                            height={41.75}
                            />
                        </div>
                    </div>
                    <p className="footer-text">
                        Наша компанія приділяє особливу увагу кожній деталі, щоб
                        гарантувати свіжість, соковитість та смак справжнього м&apos;яса.
                    </p>
                    <ul className="social-list">
                    <li>
                        <a href="https://instagram.com/dargusto_official?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" className="social-link" target="_blank">
                        <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="https://instagram.com/dargusto_official?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" className="social-link" target="_blank">
                        <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="https://instagram.com/dargusto_official?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" className="social-link" target="_blank">
                        <ion-icon name="logo-tiktok"></ion-icon>
                        </a>
                    </li>
                    </ul>
                </div>
                <ul className="footer-list">
                    <li>
                        <p className="footer-list-title">Контактна інформація</p>
                    </li>
                    <li>
                        <a href="tel:+380445615165">
                        <p className="footer-list-item">+38 (044) 561-51-65</p>
                        </a>
                    </li>
                    <li>
                        <a href="tel:+380685665858">
                            <p className="footer-list-item">+38 (068) 566-58-58</p>
                        </a>
                    </li>
                    <li>
                        <a href="tel:+380509868699">
                            <p className="footer-list-item">+38 (050) 986-86-99</p>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:dargustotrade@gmail.com">
                            <p className="footer-list-item">Dargustotrade@gmail.com</p>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:soldismar@gmail.com">
                            <p className="footer-list-item">Soldismar@gmail.com</p>
                        </a>
                    </li>
                    <li>
                        <address className="footer-list-item">м. Київ</address>
                    </li>
                    </ul>
                    <ul className="footer-list">
                    <li>
                        <p className="footer-list-title">Робочий час</p>
                    </li>

                    <li>
                        <p className="footer-list-item">Понеділок - П&apos;ятниця: 08:00 - 21:00</p>
                    </li>

                    <li>
                        <p className="footer-list-item">Вихідні: 10:00 - 20:00</p>
                    </li>
                    </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <p className="copyright-text">
                    &copy; 2006-2024
                <a href="#" className="copyright-link">DarGusto.</a> Всі права захищені.
                </p>
            </div>
        </div>
    </footer>
  )
}
