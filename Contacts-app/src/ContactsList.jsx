import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

export default function ContactsList() {
  const  contacts = useLoaderData();
  console.log(contacts);
  return (
  <ul>
      {contacts?.length
      ? contacts.map((contact) => {
      let{
        id: {value},
        name: {first , last} ,
      } = contact;
      return(
        <li key={value}>
          <NavLink to={`/contacts/${value}`}>
            {`${first} ${last}`}
          </NavLink>
        </li>
      );
      }): null}
  </ul>
   
  );
}
