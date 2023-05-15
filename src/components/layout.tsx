import React, { Component } from 'react'
import NavBar from './nav-bar-menu'
import "../styles.scss"

export default function Layout({ children }: any) {
   return (
      <div>
         <header>
            <NavBar />
         </header>
         <main>
            { children }
         </main>
      </div>
   )
}
