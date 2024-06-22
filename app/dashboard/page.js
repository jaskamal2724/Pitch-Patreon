"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const dashboard = () => {
  const { data: session } = useSession()

 
  
  if (!session) {
    const router = useRouter()
    router.push('/login')
  }
  return (
    <div>
      dashboard
    </div>
  )
}

export default dashboard