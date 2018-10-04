import { ADD_POSTER, ADD_POSTERS, ADD_POSTER_ERROR } from '../actions/types'

export default (state=[], { type, payload }) => {
  switch(type) {
    case ADD_POSTER:
      return { 
        ...state,
        posters: [
          payload,
          ...state.posters
        ]
      }
    case ADD_POSTERS:
      return { ...state, ...payload }
    case ADD_POSTER_ERROR: 
      return { ...state, error: payload }
    default:
      return state
  }
}