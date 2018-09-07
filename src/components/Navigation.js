import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { logoutUser } from '../actions'

class Navigation extends Component {
  logoutButton = () => {
    const { logoutUser, history } = this.props
    return (
      <button onClick={() => { 
        logoutUser() 
        history.push('/login') 
      }}>
        Logout
      </button>
    )
  }

  authenticated = () => (
    <div className='navigation'>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/profile'>Profile</Link>
      {this.logoutButton()}
    </div>
  )

  notAuthenticated = () => (
    <div className='navigation'>
      <a className='navigation__logo' href='#'>Postermache</a>
      <div className='navigation__auth'>
        <Link className='navigation__auth-link' to='/register'>Sign Up</Link>
        <Link className='navigation__auth-link' to='/login'>Sign In</Link>
      </div>
    </div>
  )

  render() {
    const { authenticated } = this.props

    return authenticated ? this.authenticated() : this.notAuthenticated()
  }
}

const mapStateToProps = ({ auth: { authenticated }}) => ({ authenticated })

export default withRouter(connect(mapStateToProps, { logoutUser })(Navigation))