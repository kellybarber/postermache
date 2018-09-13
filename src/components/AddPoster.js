import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DatePicker } from 'antd'

import { startUploadPoster } from '../actions'
import AddPosterLocation from './AddPosterLocation' 

class AddPoster extends Component {

  state = { preview: null, file: null, address: null, lat: null, lng: null, startDate: null, endDate: null }

  handleAddPhoto = e => {
    const file = e.target.files[0]
    this.setState({ preview: URL.createObjectURL(file), file })
  }

  handleAddLocation = ( address, lat, lng ) => {
    this.setState({ address, lat, lng })
  }

  handleChangeDate = ( date, [ startDate, endDate ] ) => { 
    this.setState({ startDate, endDate })
  }

  onSubmit = e => {
    e.preventDefault()
    const { file, address, lat, lng, startDate, endDate } = this.state
    const { startUploadPoster } = this.props

    let posterData = new FormData()
    posterData.append('file', file)
    posterData.append('details', { address, lat, lng, startDate, endDate })

    startUploadPoster(posterData)
  }
 
  render() {
    const { preview, file } = this.state
    const { RangePicker } = DatePicker

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
              className='add-poster__form__image-input' id='add-image' name='add-image' 
              type='file' accept='.jpg, .jpeg, .png' onChange={this.handleAddPhoto}
            />
            <label className='add-poster__form__image-label' htmlFor="add-image">Add Image</label>
            <AddPosterLocation className='add-poster__form__input' handleAddLocation={this.handleAddLocation}/>
            <RangePicker className='add-poster__form__date' onChange={this.handleChangeDate}/>
            <button className='add-poster__form__button'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, { startUploadPoster })(AddPoster)