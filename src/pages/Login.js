import React from 'react'
import { Link } from 'react-router-dom'

export function Login() {
  return (
    <div>
      Login
      <Link to="/register">
      <button>haga clic aquí</button>
        </Link> 
    </div>
  )
}

export default Login