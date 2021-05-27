import React from "react";
import Hero from "../../components/Hero";
import Button from "../../components/MainButton";
import "./Main.css";

const Main = props =>{
    return(
        <React.Fragment>
            <div className="Main">
                <div className="Main__content">
                    <h1 className="Main__tittle">{props.title || "Hello Dude"}</h1>
                    <Button contextText = {"Login"} Link={"/new"}></Button>
                    <Button contextText = {"SignUp"} Link={"/sign"}></Button>
                </div>
                <Hero h ={"80vh"}></Hero>
            </div>
        </React.Fragment>
    )
}

export default Main;