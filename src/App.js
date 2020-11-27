import './App.css';
import React from 'react'
import { connect } from 'react-redux';
import {  Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ProjectsIndex from './containers/ProjectsIndex';
import Contact from './containers/Contact';
import About from './containers/About';
import { fetchUser, startEditMode, startViewMode, editSiteInfo, createProject } from './redux/actions'


class App extends React.Component{

  componentDidMount(){
    this.props.fetchUser()
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route 
            path="/contact" 
            render={ () => <>
              { this.props.user ? 
              <Contact 
                user={this.props.user}
                editSiteInfo={this.props.editSiteInfo}
              /> 
                : null
              }
              </>
            }
          />
          <Route 
            path="/about" 
            render={ () => <>
            {this.props.user ?
            <About 
              user={this.props.user}
              editSiteInfo={this.props.editSiteInfo}
            /> 
            :null}
            </>
            }
          />
          <Route 
            path="/"
            render={() => 
              <>
                { this.props.user ? 
                <>
                <Home 
                  user={this.props.user}
                  editSiteInfo={this.props.editSiteInfo}
                />
                <ProjectsIndex 
                  projects={this.props.user.user_projects}
                  userId={this.props.user.id}
                  createProject={this.props.createProject}
                />
                </>
                : null

                }
              </>
            }
          />
        </Switch>
        <Footer 
            user={this.props.user}
            startEditMode={this.props.startEditMode}
            startViewMode={this.props.startViewMode}
        />
      </div>
    );
  }
}

const mdp = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser()),
    startEditMode: () => dispatch(startEditMode()),
    startViewMode: () => dispatch(startViewMode()),
    editSiteInfo: (patchObj) => dispatch(editSiteInfo(patchObj)),
    createProject: (userId) => dispatch(createProject(userId))
  }
}

const msp = state => {
  return {
    user: state.user,
    editMode: state.editMode
  }
}

export default connect(msp, mdp)(App);
