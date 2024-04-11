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

type IFood = {
    src:string,
    width:number,
    height:number,
    alt:string,
    food_category:string,
    food_category_additional?:string,
    food_name:string,
    food_price:number
}

const food:IFood[] = [
    {
        src:'/images/Tenderloin_lomo1.png',
        width:300,
        height:300,
        alt:'DarGusto Даргусто Заказати Tenderloin Lomo Con Cordon Вирізка Відруб Мармурована Яловичина',
        food_category:'Tenderloin Con Cordon',
        food_name:'Вирізка Відруб',
        food_price:1566
    },
    {
        src:'/images/lomo-sin-cordon.png',
        width:300,
        height:300,
        alt:'DarGusto Даргусто Tenderloin Sin Cordon lomo вирізка відруб витриманий Заказати',
        food_category:'Tenderloin Sin Cordon',
        food_category_additional:'Витриманий*',
        food_name:'Вирізка Відруб (зачищена)',
        food_price:1596
    },
    {
        src:'/images/Bife_Ancho.png',
        width:300,
        height:300,
        alt:'DarGusto Даргусто Bife Ancho Sin Tapa, Con Cordon | Рібай Відруб Cube Roll Замовити',
        food_category:'Rib EYE Cube Roll Sin Tapa, Sin Cordon',
        food_name:'Рібай Відруб',
        food_price:1560
    },
    {
        src:'/images/striploin.png',
        width:300,
        height:300,
        alt:'DarGusto Даргусто Стріплойн Відруб Bife Angosto StripLoin Con Cordon Замовити',
        food_category:'StripLoin Con Cordon',
        food_name:'Стріплоін Відруб',
        food_price:1458
    },
    {
        src:'/images/striploinsteak.png',
        width:300,
        height:300,
        alt:'DarGusto Даргусто Стріплойн Стейк StripLoin Con Cordon Bife Angosto Замовити',
        food_category:'StripLoin Con Cordon',
        food_category_additional:'Витриманий*',
        food_name:'Стріплоін Відруб',
        food_price:1458
    },
    {
        src:'/images/tenderloin-file.png',
        width:300,
        height:300,
        alt:'DarGusto Даргусто Tenderloin Філе Мінйон Стейк Порційний Заказати',
        food_category:'Tenderloin',
        food_category_additional:'Витриманий*',
        food_name:'Філе Міньон | Стейк Порційний',
        food_price:2950
    },
    {
        src:'/images/cuberoll.png',
        width:300,
        height:300,
        alt:'DarGusto Даргусто Bife Ancho Sin Tapa, Sin Cordon Рібай Cube Roll Стейк Порційний Замовити',
        food_category:'Rib EYE Cube Roll Sin Tapa, Sin Cordon',
        food_category_additional:'Витриманий*',
        food_name:'Рібай Стейк Порційний',
        food_price:1632
    },
    {
        src:'/images/newyork.png',
        width:300,
        height:300,
        alt:'DarGusto Даргусто Нью-Йорк Стейк | Bife Ancho Con Замовити',
        food_category:'StripLoin Con Tapa',
        food_category_additional:'Витриманий*',
        food_name:'Нью-Йорк Стейк Порційний',
        food_price:1632
    },
    {
        src:'/images/striploinsteak.png',
        width:300,
        height:300,
        alt:'DarGusto Даргусто Стріплойн Стейк StripLoin Con Cordon Bife Angosto Замовити',
        food_category:'StripLoin Con Cordon',
        food_category_additional:'Витриманий*',
        food_name:'Стріплоін Стейк Порційний',
        food_price:1518
    }
]

function Products() {
    const { store } = useAppContext()
    const [isLoading, setIsLoading] = useState(true)

    const addToCart = (food:IFood) => {
        const newCartItem = {
            price: food.food_price,
            name:food.food_name
        }
        store.cart.addToCart(newCartItem)
    }

  useEffect(()=>{
    setIsLoading(false)
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
                        {food.map((food, i)=> 
                            <li key={i}>
                                <div className="food-menu-card">
                                    <div className="card-banner">
                                        <Image
                                        src={food.src}
                                        width={food.width}
                                        height={food.height}
                                        alt={food.alt}
                                        loading="lazy"
                                        className="w-100"
                                        />
                                        <button className="btn food-menu-btn" onClick={()=> addToCart(food)}>
                                        Додати до кошика
                                        </button>
                                    </div>
                                    <div className="wrapper">
                                        <p className="category">{food.food_category}</p>
                                        {food.food_category_additional && 
                                        <div className="rating-wrapper">
                                            <div className="category">{food.food_category_additional}</div>
                                        </div>
                                        }
                                    </div>
                                    <h3 className="h3 card-title">{food.food_name}</h3>
                                    <div className="price-wrapper">
                                        <p className="price-text">Ціна:</p>
                                        <data className="price">від {food.food_price} грн / кг </data>
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