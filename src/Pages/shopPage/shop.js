import React from 'react'
import Catalog from '../../Components/Catalog/Catalog'
import Header from '../../Components/Header/Header'
import Checkout from '../../Components/Checkout/Checkout'
import Footer from '../../Components/Footer/Footer'
import "./shop.css"

function Shop() {
  return (
    <div>
      <div id="shop_main">
          <Header />
          <Catalog />
      </div>
      <Footer />
    </div>
  )
}

export default Shop
 