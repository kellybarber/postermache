import React, { Component } from 'react'
import { connect } from 'react-redux'

class PosterModal extends Component {
  render() {
    const { poster, handleShowModal } = this.props
    return (
      <div className='poster-modal' onClick={() => handleShowModal(null)}>
        <img className='poster-modal__image' src={poster.url} alt='Poster Image'/>
      </div>
    )
  }
}

const mapStateToProps = ({ posters: { posters } }, ownProps) => ({
  poster: posters.filter(poster => poster._id === ownProps.contentId)
})

export default connect(mapStateToProps)(PosterModal)