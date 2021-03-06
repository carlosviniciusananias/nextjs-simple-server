import React, { Component } from 'react'
import Link from 'next/link'

class Header extends Component {
    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        return(
            <div className="main-header">
                <div className="container">
                    <div className="logo">
                        <Link href="/">
                            <a>C-SHOP</a>
                        </Link>
                    </div>
                    <div className="items">
                        <Link href="/masculino">
                            <a>Masculino</a>
                        </Link>
                        <Link href="/feminino">
                            <a>Feminino</a>
                        </Link>
                        <Link href="/infantil">
                            <a>Infantil</a>
                        </Link>
                        <Link href="/outlet">
                            <a>Outlet</a>
                        </Link>
                    </div>
                </div>

                <style jsx global>{`
                    .logo {
                        font-family: 'Pathway Gothic One';
                        background-color: #A5E126;
                        text-transform: uppercase;
                        -webkit-text-decoration: none;
                        text-decoration: none;
                        font-weight: bold;
                        font-size: 50px;
                        margin-bottom: 15px;
                        max-width: 250px;
                        color: #fff;
                        margin: 0 auto;
                    }

                    .logo a {
                        display: flex;
                        justify-content: center;
                        color: #FFF;
                    }

                    .items {
                        margin: 15px 0;
                        text-align: center;
                    }
                    
                    .items a {
                        padding: 15px 40px;
                        font-size: 16px;
                    }
                `}</style>

            </div>
        )
    }
}

export default Header;