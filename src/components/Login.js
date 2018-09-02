import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startLoginUser } from '../actions'

class Login extends Component {

  state = { email: '', password: '' }

  onChange = e => {
    const name  = e.target.name
    const value = e.target.value
    this.setState(() => ({ [name]: value }))
  }

  onSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    const { startLoginUser } = this.props
    
    startLoginUser({ email, password })
  }

  render() {
    const { email, password } = this.state
    const { errorMessage } = this.props

    return (
      <div className='auth'>
        <div className='auth__container'>
          <h1 className='heading-primary'>Welcome Back</h1>
          <form className='auth__form' onSubmit={this.onSubmit}>
            <input 
              className='auth__form-input'
              placeholder='Email' 
              name='email' 
              type='email'
              value={email} 
              onChange={this.onChange}
            />
            <input 
              className='auth__form-input'
              placeholder='Password' 
              name='password' 
              type='password' 
              value={password} 
              onChange={this.onChange}
            />
            <span className='auth__error'>{errorMessage}</span>
            <button className='auth__form-btn'>Log In</button>
          </form>
          <a className='auth__forgot-password' href='#'>Forgot Your Password?</a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ auth: { errorMessage }}) => ({ errorMessage })

export default connect(mapStateToProps, { startLoginUser })(Login)