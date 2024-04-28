`use client`
import { IPostTextChildrenData } from '@/app/interfaces/post'
import React, { useEffect } from 'react'
import '../../reused.css'


type PostComponent = {
    data:IPostTextChildrenData[];
}

const combineText = (dataArray:{text:string}[]) => {
    return dataArray.map(obj => obj.text).join('');
  }

export default function PostTypeText({data}:PostComponent) {
  return (
    <div className='container'>
      <h4 className='h4'>
        {combineText(data)}
      </h4>
    </div>
  )
}