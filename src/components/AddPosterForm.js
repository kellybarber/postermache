import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DatePicker } from 'antd'

import { startUploadPoster } from '../actions'
import AddPosterImage from './AddPosterImage'
import AddPosterLocation from './AddPosterLocation' 

class AddPosterForm extends Component {

  state = { 
    preview: null, file: null, address: '', lat: null, lng: null, startDate: null, endDate: null, date: null 
  }

  handleAddPhoto = e => {
    const file = e.target.files[0]
    this.setState({ preview: URL.createObjectURL(file), file })
  }

  onChangeLocation = e => {
    const address = e.target.value
    this.setState({ address })
  }

  handleAddLocation = ( address, lat, lng ) => {
    this.setState({ address, lat, lng })
  }

  handleChangeDate = ( date, [ startDate, endDate ] ) => { 
    this.setState({ startDate, endDate, date })
  }

  onSubmit = async e => {
    e.preventDefault()
    const { file, address, lat, lng, startDate, endDate } = this.state
    const { startUploadPoster, handleShowForm } = this.props

    let posterData = new FormData()
    posterData.append('file', file)
    posterData.append('details', JSON.stringify({ address, lat, lng, startDate, endDate, uploadDate: Date.now() }))

    const error = await startUploadPoster(posterData)
    
    if (!error) {
      this.setState({ 
        preview: null, file: null, address: '', lat: null, lng: null, startDate: null, endDate: null, date: null 
      })
      handleShowForm()
    }
  }

  render() {
    const { preview, address, date } = this.state
    const { RangePicker } = DatePicker

    return (
      <div className='add-poster__form-container'>
        <form className='add-poster__form' onSubmit={this.onSubmit}>
          <h3 className='add-poster__form__heading'>Add a Poster</h3>
          <AddPosterImage preview={preview} handleAddPhoto={this.handleAddPhoto} />
          <AddPosterLocation 
            className='add-poster__form__input' 
            address={address}
            onChangeLocation={this.onChangeLocation}
            handleAddLocation={this.handleAddLocation}
          />
          <RangePicker 
            className='add-poster__form__date' 
            value={date}
            onChange={this.handleChangeDate}
          />
          <span className='add-poster__form__error'>{this.props.error}</span>
          <button className='add-poster__form__button'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ posters: { error } }) => ({ error })

export default connect(mapStateToProps, { startUploadPoster })(AddPosterForm)