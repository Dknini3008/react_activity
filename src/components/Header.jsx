import React from "react"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <img src="https://c.stocksy.com/a/Fvx700/z9/1898641.jpg" alt="logo" />
                </div>
            </React.Fragment>
        );
    }
}

export default Header;