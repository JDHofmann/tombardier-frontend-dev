import React from 'react'
import { AdminForm } from './AdminForm'

class Admin extends React.Component {

    state = {
        email: this.props.currentUser.user.email,
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.editAccountInfo(this.state)
        
    }
    render(){
        return(
            <AdminForm 
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                email={this.state.email}
                password={this.state.password}
                account
            />
        )
    }
}
export default Admin