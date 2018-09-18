import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DatePicker } from 'antd'

import { startUploadPoster } from '../actions'
import AddPosterLocation from './AddPosterLocation' 

class AddPoster extends Component {

  state = { 
    showForm: false, preview: null, 
    file: null, address: null, lat: null, lng: null, startDate: null, endDate: null 
  }

  handleShowForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }))
  }

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

  onSubmit = async e => {
    e.preventDefault()
    const { file, address, lat, lng, startDate, endDate } = this.state
    const { startUploadPoster } = this.props

    let posterData = new FormData()
    posterData.append('file', file)
    posterData.append('details', JSON.stringify({ address, lat, lng, startDate, endDate }))

    await startUploadPoster(posterData)

    await this.setState({ preview: null, file: null, address: null, lat: null, lng: null, startDate: null, endDate: null })
    await this.handleShowForm()
  }
 
  render() {
    const { showForm, preview } = this.state
    const { RangePicker } = DatePicker

    return (
      <div className='add-poster'>
        <input className='add-poster__checkbox' type='checkbox' checked={showForm}/>
        <label className='add-poster__button' onClick={this.handleShowForm}>
          <span className='add-poster__icon'></span>
        </label>
        <div className='add-poster__container'>
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
      </div>
    )
  }
}

export default connect(null, { startUploadPoster })(AddPoster)