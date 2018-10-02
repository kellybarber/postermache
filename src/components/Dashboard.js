import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startAddPosters } from '../actions'
import PosterBoard from './PosterBoard'
import AddPoster from './AddPoster'

class Dashboard extends Component {

  state = { loading: true }

  async componentDidMount() {
    await this.props.startAddPosters()
  }

  render() {
    return (
      <div>
        <PosterBoard/>
        <AddPoster/>
      </div>
    )
  }
}

export default connect(null, { startAddPosters })(Dashboard)