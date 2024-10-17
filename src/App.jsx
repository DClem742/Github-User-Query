import React, { useState } from 'react'
import UserCardList from './UserCardList'

const App = () => {
  const [username, setUsername] = useState('')
  const [users, setUsers] = useState([])
  const [lastAddedUserId, setLastAddedUserId] = useState(null)

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      const userData = await response.json()
      setUsers((prevUsers) => [...prevUsers, userData])
      setLastAddedUserId(userData.id)
      setUsername('')
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }

  return (
    <div>
      <h1>GitHub User Query</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Enter GitHub username"
          required
        />
        <button type="submit">Search</button>
      </form>
      <UserCardList users={users} lastAddedUserId={lastAddedUserId} />
    </div>
  )
}

export default App