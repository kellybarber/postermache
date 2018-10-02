import React from 'react'

const Poster = ({ info: { url, _id }, handleShowModal }) => {
  console.log(handleShowModal)
  

  return (
    <div className='poster-container' onClick={() => handleShowModal(_id)}>
      <img className='poster-image' src={url} alt=''/>
    </div>
  )
}

export default Poster