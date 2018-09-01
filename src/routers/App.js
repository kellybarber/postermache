import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from '../helpers/routing'
import Header from '../components/Header'
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'

export default () => (
  <BrowserRouter>
    <div className='app-container'>
      <Header/>
      <Switch>
        <PublicRoute path='/login' component={Login}/>
        <PublicRoute path='/register' component={Register}/>
        <PrivateRoute path='/dashboard' component={Dashboard}/>
      </Switch>
    </div>
  </BrowserRouter>
)