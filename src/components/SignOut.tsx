'use client'
import React from 'react'
import { Button } from "@/components/ui/button";
import useAuth from '@/hooks/useAuth';

export default function SignOut() {
  const { handleSignOut, isPending } = useAuth()
  return (
    <Button disabled={isPending} className='cursor-pointer' variant='destructive' onClick={handleSignOut}>Se déconnecter</Button>
  )
}
