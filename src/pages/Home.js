import React from 'react'
import { Link } from 'react-router-dom'

 export function Home() {
  return (
    <div>
      Home
      <Link to="/login">
      <button>haga clic aquí</button>
        </Link>  
    </div>
  )
}

export default Home