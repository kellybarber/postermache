import { ADD_POSTERS, ADD_POSTERS_ERROR } from './types'

const addPosters = payload => ({
  type: ADD_POSTERS,
  payload
})

const addPostersError = payload => ({
  type: ADD_POSTERS_ERROR,
  payload
})

export const startAddPosters = () => (
  async (dispatch, getState) => {
    try {
      const response = await fetch('/api/request/posters', {
        headers: { authorization: getState().auth.authenticated }
      })

      const data = await response.json()
      if (!response.ok) throw data

      dispatch(addPosters(data))

    } catch (error) {
      console.log('Add Posters Error: ', error)
    }
  }
)