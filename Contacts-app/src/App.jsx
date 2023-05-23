import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";

function Sidenav() {
 
return <aside>
  <header>
  </header>
    <section>
      list of contacts
    </section>
    <footer>Footer</footer>
</aside>
}

function Contents(){
  return(
  <section>
  <Outlet/>
</section>
)}

  export function Layout(){

    return (
      <>
      <main css={css`
      display:grid;
      grid-template-columns: minmax(250px ,25%) 1fr;
      `}>
        <Sidenav/> 
        <Contents/>
      </main>
      </>
    )
  }



