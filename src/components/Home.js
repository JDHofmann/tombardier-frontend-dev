import React from 'react'
import LocalEditBtn from './LocalEditBtn'

class Home extends React.Component{

    state = {
        site_title: this.props.user.site_title,
        site_subtitle: this.props.user.site_subtitle,
        editMode: false
    }

    toggleEditMode = () => {
        this.setState( prevState => ({
            editMode: !prevState.editMode
        }) )
    }

    leaveLocalEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault() 
        let patchObj = {...this.state}    
        delete patchObj.editMode   
        this.props.editSiteInfo(patchObj)
        this.setState({
            editMode: false
        })
    } 

    render(){

        return(
            <div>
            { this.state.editMode ?
            <form 
                className="title-div content-sub-div"
                onSubmit={this.submitHandler}>
                <input
                    type="text"
                    name="site_title"
                    value={this.state.site_title}
                    onChange={this.onChangeHandler}
                    className="site-title grid-1-4"
                ></input>
                <textarea
                    name="site_subtitle"
                    value={this.state.site_subtitle}
                    onChange={this.onChangeHandler}
                    className="site-subtitle grid-1-3"
                />
                <button 
                    type="submit"
                    className="update grid-1-3"
                >Update</button>
                <LocalEditBtn 
                editMode={this.state.editMode}
                toggleEditMode={this.toggleEditMode}
                />
            </form>
            
            : 
            
            <div className="title-div content-sub-div">
                <h1
                    className="site-title grid-1-4"
                >{this.props.user.site_title}</h1>
                <h2
                    className="site-subtitle grid-1-3"
                >{this.props.user.site_subtitle}</h2>
                <LocalEditBtn 
                editMode={this.state.editMode}
                toggleEditMode={this.toggleEditMode}
                />
            </div>
            }
            </div>
        )
    }
}
export default Home