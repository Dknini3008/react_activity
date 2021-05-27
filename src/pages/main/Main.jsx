import React from "react"
import Hero from "../../components/Hero.jsx"
import Button from "../../components/MainButton"
import "./Main.css"

const Main = props =>{
    return(
        <React.Fragment>
            <div className="Main">
                <div className="Main__content">
                    <h1 className="Main__title">{props.title}</h1>
                    <Button contextText = {"Login"}></Button>
                </div>
                <Hero h ={"80vh"}></Hero>
            </div>
        </React.Fragment>
    )
}

export default Main;