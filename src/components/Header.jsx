import React from "react"
import {Link} from "react-router-dom"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <Link to="/">
                        <img src="https://c.stocksy.com/a/Fvx700/z9/1898641.jpg" alt="logo" />
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;