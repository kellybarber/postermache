import React, { Component } from 'react'

class AddPosterLocation extends Component {

  componentDidMount() {
    const inputNode = document.getElementById('add-location')
    const autoComplete = new window.google.maps.places.Autocomplete(inputNode)

    autoComplete.addListener('place_changed', () => {
      const {
        formatted_address,
        geometry: { 
          location: { lat, lng }
        }
      } = autoComplete.getPlace()

      this.props.handleAddLocation(
        formatted_address,
        lat(),
        lng()
      )
    })
  }

  render() {
    const { className } = this.props

    return (
      <input className={className} id='add-location' type='text' placeholder='Enter a Location'/>
    )
  }
}

export default AddPosterLocation