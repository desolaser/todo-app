import React from 'react'
import Header from './Header'
import Footer from './Footer'


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