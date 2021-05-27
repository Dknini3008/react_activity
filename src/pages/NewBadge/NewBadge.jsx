import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import badgeForm from "../../components/BadgeForm"
import "./NewBadge.css"


class NewBadge extends React.Component{

    state ={
        loading : false,
        error: null,
        form:{
           header_picture:"",
           profile_picture: "",
           name:"",
           age:"",
           city:"",
           followers:"",
           likes:"",
           videos:"",
        }
    }
    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="col-6">
                        <Badge
                            header_picture = {this.state.form.header_picture || "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-1134166.jpg&fm=jpg"}  
                            profile_picture = {this.state.form.profile_picture || "https://i1.wp.com/knack.com/images/about/default-profile.png"}
                            name = {this.state.form.name || "Default Name"}
                            age = {this.state.form.age || " Age"}
                            city = {this.state.form.city || "Default City"}
                            followers = {this.state.form.city || "0"}
                            likes = {this.state.likes || "0"}
                            videos = {this.state.videos || "0"}
                       ></Badge>
                    </div>
                    <div className="col-6">
                        <BadgeForm> </BadgeForm>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default NewBadge;