import React, { Component } from 'react'

import AddPosterLocation from './AddPosterLocation'

class Filters extends Component {

  state = {}

  onChangeLocation = e => {
    const address = e.target.value
    this.setState({ address })
  }

  render() {
    return (
      <div>
        <AddPosterLocation/>
      </div>
    )
  }
}

export default Filters