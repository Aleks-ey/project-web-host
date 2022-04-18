import React from 'react'
import Header from '../../Components/Header/Header'
// import Checkout from '../../Components/Checkout/Checkout'
// import Item from '../../Components/Catalog/Items/Item'
import AllOrders from '../../Components/AllOrders/AllOrders'
import Footer from '../../Components/Footer/Footer'
// import axios from 'axios'
import "./Checkout.css"

function CheckoutPage() {

  return (
    <div>
      <div id="checkout_main">
          <Header />
          <AllOrders />
      </div>
      <Footer />
    </div> 
  )
}

export default CheckoutPage