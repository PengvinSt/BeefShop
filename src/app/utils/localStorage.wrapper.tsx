'use client'

import { ReactNode, useEffect } from "react"
import { useAppContext } from "./context"
import { ICart } from "../store/cart"



export const LocalStorageWorkerWrapper = ({ children }: { children: ReactNode }) => {
    const { store } = useAppContext()
    useEffect(()=> {
        if (typeof window !== "undefined") {
        const raw_data = localStorage.getItem('cart_info')
        if (raw_data !== null) {
            const data:ICart[] = JSON.parse(raw_data)
            store.cart.fillCartFull(data)
        }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <>
            {children}
        </>
    )
}