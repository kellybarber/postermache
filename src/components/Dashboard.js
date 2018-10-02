import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startAddPosters } from '../actions'
import PosterBoard from './PosterBoard'
import AddPoster from './AddPoster'

class Dashboard extends Component {

  state = { loading: true }

  async componentDidMount() {
    await this.props.startAddPosters()
    this.setState({ loading: false })
  }

  render() {
    const { loading } = this.state

    if (loading) {
      return (
        <h3>...Loading</h3>
      )
    } else {
      return (
        <div>
          <PosterBoard/>
          <AddPoster/>
        </div>
      )
    }
  }
}

export default connect(null, { startAddPosters })(Dashboard)