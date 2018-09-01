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
      <div className='entry__container'>
        <h1>Welcome Back!</h1>
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
          <button>Login</button>
        </form>
        <div>{errorMessage}</div>
      </div>
    )
  }
}

const mapStateToProps = ({ auth: { errorMessage }}) => ({ errorMessage })

export default connect(mapStateToProps, { startLoginUser })(Login)