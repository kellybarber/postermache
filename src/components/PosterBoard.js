import React, { Component } from 'react'
import { connect } from 'react-redux'

import Poster from './Poster'
import PosterModal from './PosterModal'

class PosterBoard extends Component {

  state = { showModal: false, contentId: null }

  handleShowModal = contentId => {
    this.setState(prevState => ({ 
      showModal: !prevState.showModal,
      contentId
    }))
  }

  render() {
    const { showModal, contentId } = this.state
    const { posters } = this.props
  
    return (
      <div className='poster'>
        {posters.map((poster, index) => {
          return <Poster info={poster} key={index} handleShowModal={this.handleShowModal}/>
        })}
        <input className='poster__modal-checkbox' type='checkbox' checked={showModal} />
        <PosterModal contentId={contentId} handleShowModal={this.handleShowModal}/>
      </div>
    )
  }
}

const mapStateToProps = ({ posters: { posters } }) => ({ posters })

export default connect(mapStateToProps)(PosterBoard)