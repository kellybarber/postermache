import React, { Component } from 'react'
import AddPosterLocation from './AddPosterLocation'

import { DatePicker } from 'antd'

class AddPoster extends Component {

  state = {
    preview: null,
    file: null,
    address: null, 
    lat: null, 
    lng: null
  }

  handleAddPhoto = e => {
    this.setState({
      preview: URL.createObjectURL(e.target.files[0]),
      file: e.target.files[0]
    })
  }

  handleAddLocation = (address, lat, lng) => this.setState({ address, lat, lng })

  handleChangeDate = ( date, dateString ) => { console.log(date) }
  

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
        <div className='add-poster__form-container'>
          <form className='add-poster__form' onSubmit={this.onSubmit}>
            <h3 className='add-poster__form__heading'>Add a Poster</h3>
            { preview && <img className='add-poster__form__image-preview' src={preview} alt=''/>}
            <input 
              className='add-poster__form__image-input' 
              id='add-image'
              name='add-image'
              type='file'
              accept='.jpg, .jpeg, .png'
              onChange={this.handleAddPhoto}
            />
            <label className='add-poster__form__image-label' htmlFor="add-image">Add Image</label>

            <AddPosterLocation className='add-poster__form__input' handleAddLocation={this.handleAddLocation}/>

            <DatePicker/>

          </form>
        </div>
      </div>
    )
  }
}

export default AddPoster