`use client`
import { IPostText, IPostTextChildrenData } from '@/app/interfaces/post'

import '../../reused.css'
import { useEffect } from 'react';
import PostTypeText from './postTypeText';


type PostComponent = {
    data:IPostText;
}

export default function PostTypeParagraph({data}:PostComponent) {
  if (Array.isArray(data.children) && data.children.every((child) => 'text' in child)) {
    const childrenData = data.children as unknown as IPostTextChildrenData[];
    return (
        <div className='container'>
            <PostTypeText data={childrenData} />
        </div>
    );
  } else {
    return <div>Error: Invalid data format</div>;
  }
}
