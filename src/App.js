import './App.css';
import React from 'react'
import { connect } from 'react-redux';
import {  Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ProjectsIndex from './containers/ProjectsIndex';
import Contact from './components/Contact';
import About from './components/About';
import { fetchUser } from './redux/actions'


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
                />
                <ProjectsIndex 
                  projects={this.props.user.user_projects}
                />
                </>
                : null

                }
              </>
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mdp = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser())
  }
}

const msp = state => {
  return {
    user: state.user
  }
}

export default connect(msp, mdp)(App);
