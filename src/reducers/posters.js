import { ADD_POSTERS } from '../actions/types'

export default (state=[], { type, payload }) => {
  switch(type) {
    case ADD_POSTERS:
      return { ...state, ...payload }
    default:
      return state
  }
}