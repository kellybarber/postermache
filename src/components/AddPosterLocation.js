import React, { Component } from 'react'

class AddPosterLocation extends Component {

  state = { address: '', lat: '', lng: '' }

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

      this.setState({ 
        address: formatted_address,
        lat: lat(),
        lng: lng()
      })
    })
  }

  render() {
    return (
      <input id='add-location' type='text' placeholder='Enter a Location'/>
    )
  }
}

export default AddPosterLocation