import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DatePicker } from 'antd'

import { startUploadPoster } from '../actions'
import AddPosterImage from './AddPosterImage'
import AddPosterLocation from './AddPosterLocation' 

class AddPosterForm extends Component {

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

  onSubmit = async e => {
    e.preventDefault()
    const { file, address, lat, lng, startDate, endDate } = this.state
    const { startUploadPoster, handleShowForm } = this.props

    let posterData = new FormData()
    posterData.append('file', file)
    posterData.append('details', JSON.stringify({ address, lat, lng, startDate, endDate }))

    await startUploadPoster(posterData)

    handleShowForm()
    this.setState({ preview: null, file: null, address: null, lat: null, lng: null, startDate: null, endDate: null })
  }

  render() {
    const { preview } = this.state
    const { RangePicker } = DatePicker

    return (
      <div className='add-poster__form-container'>
        <form className='add-poster__form' onSubmit={this.onSubmit}>
          <h3 className='add-poster__form__heading'>Add a Poster</h3>
          <AddPosterImage preview={preview} handleAddPhoto={this.handleAddPhoto} />
          <AddPosterLocation 
            className='add-poster__form__input' 
            handleAddLocation={this.handleAddLocation}
          />
          <RangePicker 
            className='add-poster__form__date' 
            onChange={this.handleChangeDate}
          />
          <button className='add-poster__form__button'>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { startUploadPoster })(AddPosterForm)