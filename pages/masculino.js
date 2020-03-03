import Link from 'next/link'
import Header from '../src/components/header'

function Masculino() {
    return (
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
                <div className="container">
                    <div className="product">
                        <div className="product-item">
                            <Link href="/product">
                                <a>
                                    <img src="http://placehold.it/300x200/149/FFF" />
                                    <p>Produto masculino</p>
                                    <p>R$199,00</p>
                                </a>
                            </Link>
                        </div>
                        <div className="product-item">
                            <Link href="/product">
                                <a>
                                    <img src="http://placehold.it/300x200/149/FFF" />
                                    <p>Produto masculino</p>
                                    <p>R$199,00</p>
                                </a>
                            </Link>
                        </div>
                        <div className="product-item">
                            <Link href="/product">
                                <a>
                                    <img src="http://placehold.it/300x200/149/FFF" />
                                    <p>Produto masculino</p>
                                    <p>R$199,00</p>
                                </a>
                            </Link>
                        </div>
                        <div className="product-item">
                            <Link href="/product">
                                <a>
                                    <img src="http://placehold.it/300x200/149/FFF" />
                                    <p>Produto masculino</p>
                                    <p>R$199,00</p>
                                </a>
                            </Link>
                        </div>
                        <div className="product-item">
                            <Link href="/product">
                                <a>
                                    <img src="http://placehold.it/300x200/149/FFF" />
                                    <p>Produto masculino</p>
                                    <p>R$199,00</p>
                                </a>
                            </Link>
                        </div>
                        <div className="product-item">
                            <Link href="/product">
                                <a>
                                    <img src="http://placehold.it/300x200/149/FFF" />
                                    <p>Produto masculino</p>
                                    <p>R$199,00</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                body{
                    margin: 0;
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
        
                .container {
                  max-width: 1024px;
                  margin: 0 auto;
                }

                .product {
                    display: grid;
                    grid-gap: 20px;
                    grid-template-columns: repeat(3, 1fr);
                }

                .product-item p {
                    margin: 0;
                }
            `}</style>

        </div>
    )
  }
  
  export default Masculino