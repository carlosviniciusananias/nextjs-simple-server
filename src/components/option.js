import React, { Component } from 'react'
import Link from 'next/link'

class Option extends Component {
    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        return(
            <div className="container">
                <div className="items">
                    <Link href="/masculino">
                        <a>
                            <h2>Masculino</h2>
                            <img src="http://placehold.it/300x400/555/222" />
                            <p>inspiration and innovation <br /> for every athlete in the world</p>
                        </a>
                    </Link>
                    <Link href="/feminino">
                        <a>
                            <h2>Feminino</h2>
                            <img src="http://placehold.it/300x400/555/222" />
                            <p>inspiration and innovation <br /> for every athlete in the world</p>
                        </a>
                    </Link>
                </div>
                
                
                <style jsx>{`
                    .items {
                        display: grid;
                        text-align: center;
                        grid-gap: 20px;
                        grid-template-columns: repeat(2, 1fr);
                    }
                `}</style>
            </div>
        )
    }
}

export default Option;