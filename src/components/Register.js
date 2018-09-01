import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startRegisterUser } from '../actions'

class Register extends Component {

  state = { email: '', password: '' }

  onChange = e => {
    const name  = e.target.name
    const value = e.target.value
    this.setState(() => ({ [name]: value }))
  }

  onSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    const { startRegisterUser } = this.props
    
    startRegisterUser({ email, password })
  }

  render() {
    const { email, password } = this.state
    const { errorMessage } = this.props

    return (
      <div className='entry__container'>
        <h1>Create Your Account</h1>
        <form onSubmit={this.onSubmit}>
          <input 
            placeholder='Email' 
            name='email' 
            value={email} 
            onChange={this.onChange}
          />
          <input 
            placeholder='Password' 
            name='password' 
            type='password' 
            value={password} 
            onChange={this.onChange}
          />
          <button>Register</button>
        </form>
        <div>{errorMessage}</div>
      </div>
    )
  }
}

const mapStateToProps = ({ auth: { authenticated }}) => ({ authenticated })

export default connect(mapStateToProps, { startRegisterUser })(Register)