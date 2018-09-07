import React, { Component } from 'react'

class AddPoster extends Component {
  render() {
    return (
      <div className='add-poster'>
        <input className='add-poster__checkbox' id='add-poster__toggle' type='checkbox'/>
        <label className='add-poster__button' htmlFor='add-poster__toggle'>
          <span className='add-poster__icon'></span>
        </label>
        <div className='add-poster__background'></div>
        <form className='add-poster__form'>
          <h3>Add Poster Hur</h3>
        </form>
      </div>
    )
  }
}

export default AddPoster