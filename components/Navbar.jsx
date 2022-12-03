import React from 'react'
import Link from "next/link"
import { AiOutlineShopping } from "react-icons/ai"
import logo from "../public/assets/icon.jpg"
import Image from 'next/image'

import { Cart } from "./"
import { useStateContext } from '../context/StateContext'

function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext()
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">
          <div id='flex'>
            <Image 
              src={logo}
              width={50}
              height={50}
            />
            <span>TheCodex Headphones</span>
          </div>
        </Link>
      </p>

      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>
          { totalQuantities }
        </span>
      </button>
      {
        showCart &&
        <Cart />
      }
    </div>
  )
}

export default Navbar