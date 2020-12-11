import React from 'react'
import { Redirect } from "react-router-dom";
import { AdminForm } from './AdminForm';
import '../css/Login.css'

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
                <AdminForm 
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    email={this.state.email}
                    password={this.state.password}
                />
            </>
        )
    }
}
export default Login