import React from 'react'
import ReactDOM from 'react-dom/client'
import {Layout} from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { loadContacts , loadContact } from './loaders.js'
import Contact from './Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} loader={loadContacts}>
      <Route path="/contacts/:contactId" loader={({params})=> loadContact(params.contactId)} element={<Contact/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);
