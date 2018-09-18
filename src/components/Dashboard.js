import React, { Component } from 'react'
import AddPoster from './AddPoster'

class Dashboard extends Component {

  state = { loading: true }

  async componentDidMount() {
    
  }

  render() {
    return (
      <div className='main-grid'>
        <AddPoster/>
      </div>
    )
  }
}

export default Dashboard