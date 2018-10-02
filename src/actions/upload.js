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

      console.log(data)

    } catch ({ error }) {
      console.log('Upload Poster Error: ', error)
    }
  }
)