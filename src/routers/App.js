import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from '../helpers/routing'
import Navigation from '../components/Navigation'
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'

export default () => (
  <BrowserRouter>
    <div className='app__container'>
      <Navigation/>
      <Switch>
        <PublicRoute path='/login' component={Login}/>
        <PublicRoute path='/register' component={Register}/>
        <PrivateRoute path='/dashboard' component={Dashboard}/>
      </Switch>
    </div>
  </BrowserRouter>
)