import React from 'react'

const Poster = ({ info: { url, _id }, handleShowModal }) => {
  return (
    <div className='poster-tile' onClick={() => handleShowModal(_id)}>
      <img className='poster-tile__image' src={url} alt=''/>
    </div>
  )
}

export default Poster