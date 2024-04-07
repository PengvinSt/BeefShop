import React from 'react'
import Image from "next/image";
import "./header.css";
import "../reused.css";

export default function Header() {
  return (
    <header className="header" data-header>
        <div className="container">
            <div className='logo-box'>
            <Image
                src="/images/logo_top.png"
                alt="DarGusto Даргусто стейки"
                width={96}
                height={42}
                />
            </div>
            <nav className="navbar" data-navbar>
                <ul className='navbar-list'>
                    <li className='nav-item'>
                        <a href="#home" className='navbar-link' data-nav-link>Головна</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#about" className='navbar-link' data-nav-link>О Нас</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#products" className='navbar-link' data-nav-link>Продукція</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#gallery" className='navbar-link' data-nav-link>Галерея</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#contacts" className='navbar-link' data-nav-link>Контакти</a>
                    </li>
                    <div className="li_btn">
                        <button className='btn btn-menu' data-nav-link>
                            <a href="#call_us">Замовити стейк</a>
                        </button>
                    </div>
                </ul>

            </nav>
            <div className="header-btn-group">
                <button className="btn btn-hover">
                    <a href="#call_us">Замовити стейк</a>
                </button>

                <button
                    className="nav-toggle-btn"            
                    aria-label="Toggle Menu"
                    data-menu-toggle-btn
                >
                    <span className="line top"></span>
                    <span className="line middle"></span>
                    <span className="line bottom"></span>
                </button>
            </div>
        </div>
    </header>
  )
}
