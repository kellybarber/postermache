import React, { Component } from 'react'
import { connect } from 'react-redux'

import Poster from './Poster'

class PosterBoard extends Component {
  render() {
    const { posters } = this.props
  
    return (
      <div className='poster-grid'>
        {posters.map((poster, index) => {
          return <Poster info={poster} key={index}/>
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ posters: { posters } }) => ({ posters })

export default connect(mapStateToProps)(PosterBoard)