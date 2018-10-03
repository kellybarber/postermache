import React, { Component } from 'react'
import AddPosterForm from './AddPosterForm'

class AddPoster extends Component {

  state = { showForm: false }

  handleShowForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }))
  }
 
  render() {
    const { showForm } = this.state

    return (
      <div className='add-poster'>
        <input className='add-poster__checkbox' type='checkbox' checked={showForm}/>
        <label className='add-poster__button' onClick={this.handleShowForm}>
          <span className='add-poster__icon'></span>
        </label>
        <div className='add-poster__container'>
          <AddPosterForm handleShowForm={this.handleShowForm}/>
        </div>
      </div>
    )
  }
}

export default AddPoster