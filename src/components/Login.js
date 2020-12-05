import React from 'react'
import { Redirect } from "react-router-dom";


class Login extends React.Component{

    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.submitLogin(this.state)
        
    }

    
    render(){
        if(this.props.currentUser ){
            return <Redirect to="/"/>
        }
        return(
            <>
                <form 
                    className="login-form"
                    onSubmit={this.handleSubmit}
                >
                    <legend className="login-legend">Admin Login</legend>
                    <label
                        className="lgin-label lgin-row"
                        htmlFor="login-email"
                    >email</label>
                    <input
                        type="email"
                        name="email"
                        title="Please provide a valid email address"
                        value={this.state.email}
                        onChange={this.handleChange}
                        id="login-email"
                        className="lgin-input lgin-row"
                    ></input>
                    <label
                        className="lgin-label lgin-row"
                        htmlFor="login-password"
                    >password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        title="Please provide a password with at least 1 number"
                        onChange={this.handleChange}
                        id="login-password"
                        className="lgin-input lgin-row"
                    ></input>
                    <button
                        className="update"
                        type="submit"
                    >Login</button>
                </form>
                {/* <div className="modal-mask"></div> */}
            </>
        )
    }
}
export default Login