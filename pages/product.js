import React, { Component } from 'react'
import Link from 'next/link'

class Produto extends Component {
    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        return(
            <div className="main-Produto">
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

                <div className="container">
                    <div className="pd-item">
                        <div className="pd-item-img">
                            <img src="http://placehold.it/700x450"></img>
                        </div>
                        <div className="pd-item-txt">
                            <h2>Lorem ipsum dolor product</h2>
                            <h3>R$199,00 à vista</h3>
                            <p>até 4x nos cartões</p>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>

                <style jsx global>{`
                    body{
                        margin: 0;
                    }
                    
                    .pd-item {
                        display: grid;
                        grid-gap: 20px;
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .container {
                        max-width: 1024px;
                        margin: 0 auto;
                    }
                    
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
    
                    a {
                        text-decoration: none;
                        color: #000;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    }
                `}</style>

            </div>
        )
    }
}

export default Produto;