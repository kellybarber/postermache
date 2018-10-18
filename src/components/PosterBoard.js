import React, { Component } from 'react'
import { connect } from 'react-redux'
import Masonry from 'react-masonry-css'

import Poster from './Poster'
import PosterModal from './PosterModal'

class PosterBoard extends Component {

  state = { showModal: false, contentId: null }

  breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }

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
      <div className='poster-container'>
        <Masonry 
          className='poster' 
          breakpointCols={this.breakpointColumns}
          columnClassName='poster-column'
        >
          {posters.map((poster, index) => {
            return <Poster info={poster} key={index} handleShowModal={this.handleShowModal}/>
          })}
        </Masonry>
        <input className='poster__modal-checkbox' type='checkbox' checked={showModal} />
        <PosterModal contentId={contentId} handleShowModal={this.handleShowModal}/>
      </div>
    )
  }
}

const mapStateToProps = ({ posters: { posters } }) => ({ posters })

export default connect(mapStateToProps)(PosterBoard)