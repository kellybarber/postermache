import { ADD_POSTER, ADD_POSTER_ERROR } from './types'

const addPoster = payload => ({
  type: ADD_POSTER,
  payload
})

const addPosterError = payload => ({
  type: ADD_POSTER_ERROR,
  payload
})

export const startUploadPoster = posterData => (
  async ( dispatch, getState ) => {
    try {
      const response = await fetch('/api/upload/poster', {
        method: 'post',
        headers: { authorization: getState().auth.authenticated },
        body: posterData
      })

      const data = await response.json()
      if (!response.ok) throw data

      dispatch(addPoster(data))

    } catch ({ error }) {
      console.log('Upload Poster Error: ', error)
      dispatch(addPosterError(error))
      return error
    }
  }
)