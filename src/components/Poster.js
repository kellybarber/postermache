import React from 'react'

const Poster = ({ info: { url, _id } }) => {
  return (
    <div className='poster-container'>
      <img className='poster-image' src={url} alt=''/>
    </div>
  )
}

export default Poster