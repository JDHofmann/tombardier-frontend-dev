import React from 'react'

class Home extends React.Component{

    state = {
        site_title: this.props.user.site_title,
        site_subtitle: this.props.user.site_subtitle
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()        
        this.props.editSiteInfo(this.state)
        this.setState({
            site_title: this.props.user.site_title,
            site_subtitle: this.props.user.site_subtitle
        })
    } 

    render(){
        const styling = {
            backgroundColor: "#f0fff0"
        }

        return(
            <>
            { this.props.editMode ?
            <form style={styling} onSubmit={this.submitHandler}>
                <input
                    type="text"
                    name="site_title"
                    value={this.state.site_title}
                    onChange={this.onChangeHandler}
                ></input>
                <input
                    type="text-area"
                    name="site_subtitle"
                    value={this.state.site_subtitle}
                    onChange={this.onChangeHandler}
                ></input>
                <button type="submit">Submit Changes</button>
            </form>
            
            : 
            
            <div style={styling}>
                <h1>{this.props.user.site_title}</h1>
                <h2>{this.props.user.site_subtitle}</h2>
            </div>
            }
            </>
        )
    }
}
export default Home