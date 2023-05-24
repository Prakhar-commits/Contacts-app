import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function ContactsList() {
  const  contacts = useLoaderData();
  console.log(contacts);
  return (
    <div>ContactsList</div>
  )
}
