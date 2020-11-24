import React from 'react'

class NewUserLink extends React.Component{

    state = {
        link_url: "",
        link_text: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let userId = this.props.userId
        this.props.createUserLink(this.state, userId) 
        this.setState({
            link_url: "",
            link_text: ""
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(

                <form onSubmit={this.handleSubmit}>
                <input
                    name="link_url"
                    value={this.state.link_url}
                    onChange={this.handleChange}
                />
                <input
                name="link_text"
                value={this.state.link_text}
                onChange={this.handleChange}
                />
                <button type="submit">New Link</button>
                </form>

        )
    }
}
export default NewUserLink