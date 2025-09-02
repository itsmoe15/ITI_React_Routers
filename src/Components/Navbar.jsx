import React from 'react'
import { Link } from 'react-router'
import style from './Navbar.module.css'

function Navbar() {
  let MyPages = [
    <li><Link to="/">Home</Link></li>,
    <li><Link to="/about">About</Link></li>,
    <li><Link to="/shop">Shop</Link></li>,
    <li><Link to="/Cart">Cart</Link></li>
  ]
  
  return (
    <ul className={`${style.list} + ${style.test}`}>
      {MyPages.map((page, index) => (
        <li key={index}>{page}</li>
      ))}
    </ul>
  )
}

export default Navbar