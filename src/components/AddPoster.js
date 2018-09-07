import React, { Component } from 'react'
import AddPosterLocation from './AddPosterLocation'

class AddPoster extends Component {

  state = {
    preview: null,
    file: null
  }

  handleAddPhoto = e => {
    this.setState({
      preview: URL.createObjectURL(e.target.files[0]),
      file: e.target.files[0]
    })
  }

  handleAddLocation = () => {
    
  }

  onSubmit = () => {

  }
 
  render() {
    const { preview, file } = this.state

    return (
      <div className='add-poster'>
        <input className='add-poster__checkbox' id='add-poster__toggle' type='checkbox'/>
        <label className='add-poster__button' htmlFor='add-poster__toggle'>
          <span className='add-poster__icon'></span>
        </label>
        <div className='add-poster__background'></div>

        <form className='add-poster__form' onSubmit={this.onSubmit}>
          <h3 className='heading-primary'>Add a Poster</h3>

          <img className='add-poster__form__image-preview' src={preview} alt=''/>
          <input 
            className='add-poster__form__image-input' 
            id='add-image'
            name='add-image'
            type='file'
            accept='.jpg, .jpeg, .png'
            onChange={this.handleAddPhoto}
          />
          <label className='add-poster__form__image-label' htmlFor="add-image">Add Image</label>

          <AddPosterLocation/>

        </form>
      </div>
    )
  }
}

export default AddPoster