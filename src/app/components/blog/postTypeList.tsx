`use client`
import { IPostText } from '@/app/interfaces/post'
import React, { useEffect } from 'react'
import '../../reused.css'
import './postType.css'
import PostTypeText from './postTypeText'


type PostComponent = {
    data:IPostText;
}

export default function PostTypeList({data}:PostComponent) {
  return (
    <div className='container'>
      {data.children.map((child , i)=>
      <>
        {data.format === 'ordered' ? 
        <ol key={i} className='post-type-list-container'>
          <li><PostTypeText data={child.children}/></li>
        </ol>
      :
        <ul key={i} className='post-type-list-container'>
          <li><PostTypeText data={child.children}/></li>
        </ul>
      }
      </>
      )}
    </div>
  )
}
