import React, { Component } from 'react'
import Link from 'next/link'

class Banner extends Component {
    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        return(
            <div className="main-banner">
                    <Link href="/masculino">
                        <a>
                            <img src="http://placehold.it/1900x650/963/FFF" />
                        </a>
                    </Link>                
                
                <style jsx>{`
                    .main-banner img {
                        max-width: 100%;
                        height: auto;
                    }
                `}</style>
            </div>
        )
    }
}

export default Banner;