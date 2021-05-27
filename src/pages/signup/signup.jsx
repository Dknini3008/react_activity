import React from "react"
import Hero from "../../components/Hero"
import "./signup.css"


class SignForm extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="SignForm" m-5>
                    <form onSubmit= {this.props.onSubmit}>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Name 
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Phone number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="phone_number"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Age 
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="age"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                City 
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="city"
                            />
                            <button type="submit" className= "Submit__button">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default SignForm;