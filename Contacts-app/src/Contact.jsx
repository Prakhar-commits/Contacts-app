import { css } from '@emotion/react';
import React from 'react'
import { useLoaderData } from 'react-router-dom'


export default function Contact() {
    const {name : {first , last , title}, email , cell , picture,} = useLoaderData();
    
  return (
    <section css={css({
        margin: "16px",
        padding : "16px",
        display: "grid",
        gridTemplateColumns: "250px 400px",
        columnGap: "16px",
        border: "1px solid lightblack",
        borderRadius: "8px",
    })}>
        <section>
            <img css={css`
            width: 100%;
            height: 100%;
            object-fit: contain;`} src={picture.large} alt={first} />
        </section>
        <article css={css({
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
        })}>
        <h1>
        {title} {first} {last} 
        </h1>
        <h2>{email}</h2>
        <h3>{cell}</h3>
        </article>
    </section>
  )
}
