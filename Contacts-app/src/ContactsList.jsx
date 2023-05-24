import { css } from '@emotion/react';
import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

export default function ContactsList({searchtext}) {
  const  contacts = useLoaderData()?? [];
  const filteredContacts = contacts.filter(contact => {
    const {first ,last }= contact.name;
    return first.toLowerCase().includes(searchtext.toLowerCase()) || last.toLowerCase().includes(searchtext.toLowerCase());
    })
  console.log(contacts);
  return (
  <ul css={css`
  list-style: none;
  padding: 0;`}>
      {filteredContacts?.length
      ? filteredContacts.map((contact) => {
      const {
        id: {value},
        name: {first , last} ,
      } = contact;
      return(
        <li key={value}>
          <NavLink css={css({
            display: "block",
            padding: "6px 8px",
            textDecoration: "none",
            color: "royalblue",
            "&.active":{
              backgroundColor: "royalblue",
              color:"white",
              borderRadius:"8px",
            }
          })} to={`/contacts/${value}`}>
            {`${first} ${last}`}
          </NavLink>
        </li>
      );
      }): null}
  </ul>
   
  );
}
