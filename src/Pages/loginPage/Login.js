import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Login from '../../Components/Login/Login'
import "./Login.css"

function LoginPage() {
  return (
    <div>
      <div id="login_main">
          <Header />
          <Login />
      </div>
      <Footer />
    </div>
  )
}

export default LoginPage