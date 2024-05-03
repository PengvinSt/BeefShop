'use client'
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import "../page.css";
import "../reused.css"
import { useEffect, useState } from "react";
import Preload from "../components/preload";
import { observer } from "mobx-react";
import { useAppContext } from "../utils/context";
import { IFood } from "../interfaces/food";
import { IDtoFood } from "../interfaces/dto";
import { shopBaseUrl } from "../api/app";

const imageSrcLoader = ({src}: {src: string}) => {
    return `${shopBaseUrl}${src}`
}

function Products() {
    const { store, api } = useAppContext()
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState<IDtoFood[]>([])

    const addToCart = (food:IFood) => {
        const newCartItem = {
            price: food.food_price,
            name:food.food_name
        }
        store.cart.addToCart(newCartItem)
    }

    

    const getInitialData = async () => {
        const data:IDtoFood[] = await api.shop.getProductsAll()
        setProducts(data)
    }
   
  useEffect(()=>{
    getInitialData()
    setIsLoading(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return isLoading ? <Preload/> : (
    <>
    <Header/>
    <main>
        <article>
            <section className="margin-start section food-menu" id="products">
                <div className="container">
                    <p className="section-subtitle">
                        DarGusto - гармонія неперевершених смаків
                    </p>
                    <h2 className="h2 section-title">
                    Вибір стейків
                    </h2>
                    <ul className="food-menu-list">
                        {products.map(({attributes}, i)=> 
                            <li key={i}>
                                <div className="food-menu-card">
                                    <div className="card-banner">
                                        <div className="image-holder-md">
                                        <Image
                                        loader={imageSrcLoader}
                                        src={attributes.Product_image ? attributes.Product_image?.data.attributes.url : ''}
                                        loading="eager"
                                        layout="fill"
                                        alt={attributes.alt}
                                        className="w-100"
                                        />
                                        </div>
                                        <button className="btn food-menu-btn" onClick={()=> addToCart(attributes)}>
                                        Додати до кошика
                                        </button>
                                    </div>
                                    <div className="wrapper">
                                        <p className="category">{attributes.food_category}</p>
                                        {attributes.food_category_additional && 
                                        <div className="rating-wrapper">
                                            <div className="category">{attributes.food_category_additional}</div>
                                        </div>
                                        }
                                    </div>
                                    <h3 className="h3 card-title">{attributes.food_name}</h3>
                                    <div className="price-wrapper">
                                        <p className="price-text">Ціна:</p>
                                        <data className="price">від {attributes.food_price} грн / кг </data>
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
export default observer(Products);