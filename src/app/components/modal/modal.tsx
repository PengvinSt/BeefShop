`use client`
import './modal.css'
import '../../reused.css'
import { ReactNode } from 'react'

type modalComponent = {
    isOpenModal:boolean,
    setOpenModal:() => void,
    children:ReactNode
}

export default function Modal({isOpenModal=false,setOpenModal, children}:modalComponent) {
    const setScroll = (isModal:boolean) => {
        if (isModal) {
            document.body.style.overflow = "hidden"
        }else {
            document.body.style.overflow = 'visible';
            document.body.style.overflowX = 'hidden';
        }
    }

    if(isOpenModal){
        setScroll(isOpenModal)
        return (
            <>
            <div className='modal_container'>
            <div className='modal_background' onClick={setOpenModal}></div>
                <div className='modal_body'>
                    {children}
                </div>
            </div>
            </>
          )
    }else {
        setScroll(isOpenModal)
        return null
    }
}
