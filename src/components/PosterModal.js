import React, { Component } from 'react'
import { connect } from 'react-redux'

class PosterModal extends Component {
  render() {
    const { poster, handleShowModal } = this.props
    console.log(poster)
    

    return (
      <div className='poster-modal' onClick={() => handleShowModal(null)}>
        <img className='poster-modal__image' src={poster.url} alt='Poster Image'/>
      </div>
    )
  }
}

PosterModal.defaultProps = {
  poster: {
    url: ''
  }
}

const mapStateToProps = ({ posters: { posters } }, ownProps) => {
  const poster = posters.filter(poster => poster._id === ownProps.contentId)

  if (!poster[0]) return {}
  else return { poster: poster[0] }
}

export default connect(mapStateToProps)(PosterModal)