import React from "react";
import './style/BadgeForm.css'

class BadgeForm extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="BadgeForm" m-5></div>
                    <form onSubmit= {this.props.onSubmit}></form>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Name 
                            </label>
                        </div>
            </React.Fragment>
        );
    }
}

export default BadgeForm;