import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { editLinkInfo } from '../redux/actions'

class UserLink extends React.Component{

    state = {
        link_url: this.props.link.link_url,
        link_text: this.props.link.link_text,
        id: this.props.link.id
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.editLinkInfo(this.state) 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <>
            {
                this.props.editMode ? 
                <>
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
                <button type="submit">Submit change</button>
                </form>

                </>
                :
            <NavLink key={this.props.link.link_url} to="https://github.com/">{this.props.link.link_text}</NavLink>
            }
            </>

        )
    }
}

const mdp = dispatch => {
    return {
        editLinkInfo: (patchObj) => dispatch(editLinkInfo(patchObj))
    }
}

const msp = state => {
    return {
        editMode: state.editMode
    }
}

export default connect(msp, mdp)(UserLink)