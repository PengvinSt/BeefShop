'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import "./header.css";
import "../reused.css";
import { FaCartPlus, FaCartShopping, FaMinus, FaPlus, FaX } from 'react-icons/fa6';
import Modal from './modal/modal';
import { useAppContext } from '../utils/context';
import { observer } from 'mobx-react';
import ToTopButton from './button/toTopButton';
import { pageUrl } from '../api/app';

const toUp = (header:Element,backTopBtn:Element):void => {
    if (window.scrollY >= 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}

function Header() {
    const { store } = useAppContext();
    const [isOpenModal,setOpenModal] = useState(false);

    useEffect(()=> {
        const header = document.querySelector("[data-header]");
        const backTopBtn = document.querySelector("[data-back-top-btn]");

        window.addEventListener("scroll", ()=> {if(header && backTopBtn && window){toUp(header, backTopBtn)}});

        return ()=> {
            window.removeEventListener('scroll', ()=> {if(header && backTopBtn && window){toUp(header, backTopBtn)}});
        }
    },[])

    const acceptCart = ():void => {
        setOpenModal(false)
        store.cart.acceptCart()
        window.location.href = `${pageUrl}/contacts`;
    }

  return (
    <header className="header" data-header>
        <div className="container">
            <div className='logo-box'>
            <a href="/" title='DarGusto Даргусто стейки Головна'>
            <Image
                src="/images/logo_top.png"
                alt="DarGusto Даргусто стейки"
                width={96}
                height={42}
            />
            </a>
            </div>
            <nav className="navbar" data-navbar>
                <ul className='navbar-list'>
                    <li className='nav-item'>
                        <a href="/" className='navbar-link' data-nav-link>Головна</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/about" className='navbar-link' data-nav-link>Про нас</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/products" className='navbar-link' data-nav-link>Продукція</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/blog" className='navbar-link' data-nav-link>Блог</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/contacts" className='navbar-link' data-nav-link>Контакти</a>
                    </li>
                    <div className="li_btn">
                        <button className='btn btn-menu' data-nav-link>
                            <a href="#call_us">Замовити стейк</a>
                        </button>
                    </div>
                </ul>

            </nav>
            <div className="header-btn-group">
                {store.cart.cart.length > 0 
                // ? <FaCartPlus cursor='pointer' color='black' size={25} onClick={()=> setOpenModal(true)}/>
                && <FaCartShopping  cursor='pointer' color='black' size={25} onClick={()=> setOpenModal(true)}/>
                }
                <Modal isOpenModal={isOpenModal} setOpenModal={()=> setOpenModal(false)}>
                    <div className='modal-contanier'>
                        <div className="modal-header">
                            <h2 className='h4'>Кошик покупок:</h2>
                            <FaX cursor="pointer" color='red' onClick={()=> setOpenModal(false)}/>
                        </div>
                        <div className="modal-body">
                            {store.cart.cart.map((cartItem, i) =>
                            <div className="buy-item" key={i}>
                            <div className="buy-item-info">
                                <h2 className='buy-item-name h-modal'>{cartItem.name},</h2>
                                <h2 className="buy-item-cost h-modal">{cartItem.price} грн/кг</h2>
                            </div>
                            <div className="buy-item-info">
                                <FaMinus color="red" cursor="pointer" onClick={()=>store.cart.deleteFromCart(cartItem.name)}/>
                                <h2 className='buy-item-number h-modal'>{cartItem.amount}</h2>
                                <FaPlus color="red" cursor="pointer" onClick={()=>store.cart.addToCart({name:cartItem.name, price:cartItem.price})}/>
                            </div>
                        </div>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-hover" onClick={acceptCart}>
                                Підтвердити замовлення
                            </button>
                        </div>
                    </div>
                </Modal>
                <button className="btn btn-hover">
                    <a href="/products">Замовити стейк</a>
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

export default observer(Header);
