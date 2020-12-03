import './App.css';
import React from 'react'
import { connect } from 'react-redux';
import {  Route, Switch } from 'react-router-dom';
import Header from './components/Header';
// import Home from './components/Home';
import Footer from './components/Footer';
import ProjectsIndex from './containers/ProjectsIndex';
import Contact from './containers/Contact';
import About from './containers/About';
import { fetchUser, editSiteInfo, createProject, submitLogin, fetchCurrentUser, handleLogout } from './redux/actions'
import Login from './components/Login';


class App extends React.Component{

  componentDidMount(){
    this.props.fetchUser()
    const token = localStorage.getItem("token")
    if(token){
      this.props.fetchCurrentUser(token)
    }
    else {
      console.log("no token")
    }
  }

  renderTitle = () => {
    return  <h1 className="site-title solo">{this.props.user.site_title}</h1>
  }

  render(){
    return (
      <>
      <div className="App">
        <Header />
        {/* <Home 
                    user={this.props.user}
                    editSiteInfo={this.props.editSiteInfo}
                /> */}
        <Switch>
          <Route 
            path="/login"
            render={ () =>
              <Login 
              submitLogin={this.props.submitLogin}
              currentUser={this.props.currentUser}
              />
            }
          />
          <Route 
            path="/contact" 
            render={ () => <>
              { this.props.user ? 
              <>
              {this.renderTitle()}
              <Contact 
                user={this.props.user}
                currentUser={this.props.currentUser}
                editSiteInfo={this.props.editSiteInfo}
              />
              </> 
                : null
              }
              </>
            }
          />
          <Route 
            path="/about" 
            render={ () => <>
            {this.props.user ?
            <>
            {this.renderTitle()}
            <About 
              user={this.props.user}
              editSiteInfo={this.props.editSiteInfo}
            /> 
            </>
            :null}
            </>
            }
          />
          <Route 
            path="/"
            render={(routerProps) => 
              <>
                { this.props.user ? 
                <>
                {/* <Home 
                    user={this.props.user}
                    editSiteInfo={this.props.editSiteInfo}
                /> */}
                <ProjectsIndex 
                  renderTitle={this.renderTitle}
                  history={routerProps.history}
                  projects={this.props.user.user_projects}
                  user={this.props.user}
                  currentUser={this.props.currentUser}
                  createProject={this.props.createProject}
                  editSiteInfo={this.props.editSiteInfo}
                  />
                  </>
                : null
                }
              </>
            }
          />
        </Switch>
      </div>
        <Footer 
            user={this.props.user}
            startEditMode={this.props.startEditMode}
            startViewMode={this.props.startViewMode}
            currentUser={this.props.currentUser}
            handleLogout={this.props.handleLogout}
        />
        </>
    );
  }
}

const mdp = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser()),
    editSiteInfo: (patchObj) => dispatch(editSiteInfo(patchObj)),
    createProject: (userId) => dispatch(createProject(userId)),
    submitLogin: (loginObj) => dispatch(submitLogin(loginObj)),
    fetchCurrentUser: (token) => dispatch(fetchCurrentUser(token)),
    handleLogout: () => dispatch(handleLogout())
  }
}

const msp = state => {
  return {
    user: state.user,
    currentUser: state.currentUser
  }
}

export default connect(msp, mdp)(App);
