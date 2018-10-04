import React from 'react'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from '../helpers/routing'
import Navigation from '../components/Navigation'
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import Profile from '../components/Profile'

export default () => (
  <BrowserRouter>
    <div className='app__container'>
      <Navigation/>
      <Switch>
        <PublicRoute exact path='/' component={Register}/>
        <PublicRoute path='/login' component={Login}/>
        <PrivateRoute path='/dashboard' component={Dashboard}/>
        <PrivateRoute path='/profile' component={Profile}/>
        <Redirect from='*' to={'/'}/>
      </Switch>
    </div>
  </BrowserRouter>
)