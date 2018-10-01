import React from 'react'

const AddPosterImage = ({ preview, handleAddPhoto }) => (
  <div className='add-poster__form__image-container'>
    { preview && <img className='add-poster__form__image-preview' src={preview} alt=''/>}
    <input 
      className='add-poster__form__image-input' id='add-image' name='add-image' 
      type='file' accept='.jpg, .jpeg, .png' onChange={handleAddPhoto}
    />
    <label className='add-poster__form__image-label' htmlFor="add-image">Add Image</label>
  </div>
)

export default AddPosterImage