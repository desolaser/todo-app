import React from 'react'
import Header from './header'
import Footer from './footer'


const Layout = ({ children }) => {
    return (
        <div class="container">
            <div class="content">
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout