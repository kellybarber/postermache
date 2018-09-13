export const startUploadPoster = posterData => (
  async ( dispatch, getState ) => {
    try {
      const response = await fetch('/api/upload/poster', {
        method: 'post',
        headers: { authorization: getState().auth.authenticated },
        body: posterData
      })

      const data = await response

      console.log(data)
      


    } catch (error) {
      console.log('Error', error)
      
    }
  }
)