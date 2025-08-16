import { useState } from 'react'

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setLoggedIn(true)
  }

  if (!loggedIn) {
    return (
      <div className="flex items-center justify-center h-screen">
        <form onSubmit={handleLogin} className="p-6 border rounded shadow-md">
          <h1 className="text-xl mb-4">Admin Login</h1>
          <input type="password" placeholder="Password" className="border p-2 w-full mb-4" />
          <button className="bg-black text-white px-4 py-2 rounded">Login</button>
        </form>
      </div>
    )
  }

  return <div className="p-6">Welcome Admin 👋 — Manage Products Here</div>
}