import { useRef, useState } from "react";
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import ContactsList from "./ContactsList";

function Header({onSearch}){

function Submit(e){
  e.preventDefault();
  onSearch(searchElemetnRef.current.value);
}

const searchElemetnRef = useRef(null);

  return (
  <header css={css`
  border-bottom: 1px solid;
  padding: 16px;`}>
 <form css={css`
 display: flex;
 justify-content: space-between;`}
 onSubmit={Submit}>
  <input ref={searchElemetnRef} css={css({
    padding:"16px",

  })} type="text" />
  <button >Search</button>
 </form>
  </header>
)}


function Sidenav() {
  const [searchtext , setSearchText] = useState("");
  function onSearch(text){
    setSearchText(text);
  }

  return (
    <aside css={css`
    border-right: 1px solid;
    display: grid;
    grid-template-rows: auto 1fr auto;`
    }>
     
      <Header onSearch={onSearch}/>
      <section css={css`
      padding:16px;
      max-height: 500px:
      overflow: auto;`}>
        <ContactsList searchtext={searchtext}/>
      </section>
      <footer css={css`
      border-top: 1px solid;
      padding: 16px;`}>Footer</footer>
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
