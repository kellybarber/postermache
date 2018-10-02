import React from 'react'
import { connect } from 'react-redux'

const PosterModal = ({ showModal, contentId, poster }) => {  
  return (
    <div></div>
  )
}

const mapStateToProps = ({ posters: { posters } }, ownProps) => ({
  poster: posters.filter(poster => poster._id === ownProps.contentId)
})

export default connect(mapStateToProps)(PosterModal)