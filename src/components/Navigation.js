import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { logoutUser } from '../actions'

class Navigation extends Component {
  logoutButton = () => {
    const { logoutUser, history } = this.props
    return (
      <button 
        className='navigation__logout'
        onClick={() => { 
          logoutUser() 
          history.push('/login') 
        }}
      >
        Logout
      </button>
    )
  }

  authenticated = () => (
    <div className='navigation'>
      <Link className='navigation__logo' to='/dashboard'>Postermache</Link>
      {this.logoutButton()}
    </div>
  )

  notAuthenticated = () => (
    <div className='navigation'>
      <a className='navigation__logo' href='#'>Postermache</a>
      <div className='navigation__auth'>
        <Link className='navigation__auth-link' to='/'>Sign Up</Link>
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