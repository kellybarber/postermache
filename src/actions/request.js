import { ADD_POSTERS } from './types'

const addPosters = payload => ({
  type: ADD_POSTERS,
  payload
})

export const startAddPosters = () => (
  async (dispatch, getState) => {
    try {
      const response = await fetch('api/request/posters', {
        headers: { authorization: getState().auth.authenticated }
      })

      const data = response.json()

      console.log(data)
      


    } catch (error) {

    }
  }
)