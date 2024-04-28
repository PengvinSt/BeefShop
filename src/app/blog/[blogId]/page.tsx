'use client'

import PostTypeList from "@/app/components/blog/postTypeList";
import "../../page.css";
import "../../reused.css"
import Footer from "@/app/components/footer"
import Header from "@/app/components/header"
import Preload from "@/app/components/preload"
import { IPost } from "@/app/interfaces/post";
import { useAppContext } from "@/app/utils/context"
import { useEffect, useState } from "react"
import PostTypeParagraph from "@/app/components/blog/postTypeParagraph";
import Image from "next/image";
import './BlogPost.css'
const imageSrcLoader = ({src}: {src: string}) => {
    return `${src}`
}

export default function BlogPost({params} : {params: { blogId: string }}) {
    const { api } = useAppContext()
    const [postData, setPostData] = useState<IPost>()
    const [isLoading, setIsLoading] = useState(true)


    const getInitialData = async () => {
        const data:IPost | null = await api.shop.getPostById(params.blogId)
        if(data !== null) {
            setPostData(data)
        }
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
                <div className="container">
                    <h1 className="h1 post-header" >{postData?.post_title}</h1>
                    {postData?.shop_post_block.map((post_data, i) => 
                    <div className="post-part-holder" key={i}>
                    {
                        post_data.media_link && 
                        <div className="post-image">
                            <Image
                            loader={imageSrcLoader}
                            src={post_data.media_link}
                            loading="eager"
                            alt={`DarGusto стейки фото з посту ${postData?.post_title}`}
                            layout='fill'
                            objectFit='contain'
                            />
                        </div> 
                    }
                    {
                        post_data.post_text && post_data.post_text.map((post_text_data, i)=> 
                        <div key={i} className="post-part-text-holder">
                            {
                                post_text_data.type === 'list' && <PostTypeList data={post_text_data} key={i}/>
                            }
                            {
                                post_text_data.type === 'paragraph' && <PostTypeParagraph data={post_text_data} key={i}/>
                            }
                        </div>
                        )
                    }
                    </div>
                    )}
                </div>
            </section>
        </article>
    </main>
    <Footer/>
    </>
  )

}