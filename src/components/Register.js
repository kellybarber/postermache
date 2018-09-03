import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startRegisterUser } from '../actions'

class Register extends Component {

  state = { firstName: '', lastName: '', email: '', password: '' }

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
    const { firstName, lastName, email, password } = this.state
    const { errorMessage } = this.props

    return (
      <div className='auth'>
        <div className='auth__container'>
          <h1 className='heading-primary'>Create Your Account</h1>
          <form className='auth__form' onSubmit={this.onSubmit}>
            <div className='auth__form-group'>
              <input 
                className='auth__form-input'
                placeholder='First Name' 
                name='firstName' 
                type='text'
                value={firstName} 
                onChange={this.onChange}
              />
              <label className='auth__form-label'>
                First Name
              </label>
            </div>
            <div className='auth__form-group'>
              <input 
                className='auth__form-input'
                placeholder='Last Name' 
                name='lastName' 
                type='text'
                value={lastName} 
                onChange={this.onChange}
              />
              <label className='auth__form-label'>
                Last Name
              </label>
            </div>
            <div className='auth__form-group'>
              <input 
                className='auth__form-input'
                placeholder='Email' 
                name='email' 
                type='email'
                value={email} 
                onChange={this.onChange}
              />
              <label className='auth__form-label'>
                Email
              </label>
            </div>
            <div className='auth__form-group'>
              <input 
                className='auth__form-input'
                placeholder='Password' 
                name='password' 
                type='password' 
                value={password} 
                onChange={this.onChange}
              />
              <label className='auth__form-label'>
                Password
              </label>
            </div>
            <span className='auth__error'>{errorMessage}</span>
            <button className='auth__form-btn'>Register</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ auth: { errorMessage }}) => ({ errorMessage })

export default connect(mapStateToProps, { startRegisterUser })(Register)