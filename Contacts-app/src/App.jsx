import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";

function Sidenav() {
  return (
    <aside css={css`
    border-right: 1px solid;
    display: grid;
    grid-template-rows: auto 1fr auto;`
    }>
      <header css={css`
      border-bottom: 1px solid;
      padding: 16px;`}>
     <form css={css`
     display: flex;
     justify-content: space-between;`}>
      <input type="text" />
      <button>Search</button>
     </form>
      </header>
      <section css={css`
      padding:16px;`}>list of contacts</section>
      <footer css={css`
      border-top: 1px solid
      padding: 16px`}>Footer</footer>
    </aside>
  );
}
  
function Contents() {
  return (
    <section>
      <Outlet />
    </section>
  );
}

export function Layout() {
  return (
    <>
      <main
        css={css`
          display: grid;
          grid-template-columns: minmax(250px, 25%) 1fr;
          height: 100%;
        `}
      >
        <Sidenav />
        <Contents />
      </main>
    </>
  );
}
