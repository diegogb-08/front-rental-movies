import React from 'react'
import User, {call} from '../../containers/User/User';

function Probando() {

  const searchByGenre = async (value) => {
    let url = `${baseUrl}${discover}${movie}${apiKey}&include_video=true&with_genres=${value}`
    let movies = await call(url)
    return movies
}
  return (
    <div>
      
    </div>
  )
}

export default Probando
