'use client'
import React, { useEffect } from 'react'
import axios from "axios"
import {useRouter} from "next/navigation"

function page() {
    const router = useRouter();
    useEffect(()=>{
        const signOut = async ()=>{
            try {
                const res = await axios.get('/api/users/signout')
                router.push("/")
            } catch (error) {
                console.error("some error occured: ", error)
            }
        }
        signOut()
    })
  return (
    <></>
  )
}

export default page
