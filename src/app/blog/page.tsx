'use client'
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import "../page.css";
import "../reused.css"
import Preload from "../components/preload";
import { useEffect, useState } from "react";
import { useAppContext } from "../utils/context";
import { IDtoPost } from "../interfaces/dto";



export default function Blog() {
    const { store, api } = useAppContext()
    const [posts, setPosts] = useState<IDtoPost[]>([])
    const [isLoading, setIsLoading] = useState(true)


    const getInitialData = async () => {
        const data:IDtoPost[] = await api.shop.getPostsListAll()
        setPosts(data)
    }

    useEffect(()=>{
    getInitialData()
    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return isLoading ? <Preload/> :(
    <>
    <Header/>
    <main>
        <article>
        {/* <!-- - #Blog--> */}
            <section className="margin-start section section-divider gray banner" id="gallery">
                <div className="container blog-card-container">
                    {posts.map(post =>
                    <>
                    <h3 className="blog-card-title">{post.attributes.post_title}</h3>
                    <p className="blog-card-description">{post.attributes.post_description}</p>
                    <a href={'blog/' + post.id} className="blog-card-href">
                        <button >Читати далі...</button>
                    </a>
                    </>)}
                </div>
            </section>
        </article>
    </main>
    <Footer/>
    </>
  )

}