import { useEffect, useState } from "react"
import Profile from './components/Profile'
import Repos from './components/Repos'

function App() {
  const [user, setUser] = useState([])
  const [orgs, setOrgs] = useState([])
  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUser()
      setUser(user)
    }

    const getOrgs = async () => {
      const orgs = await fetchOrgs()
      setOrgs(orgs)
    }

    getUser()
    getOrgs()
  }, [])

  // Get user data
  const fetchUser = async () => {
    const res = await fetch(' https://api.github.com/users/oussematn')
    const data = await res.json()
    return data
  }
  // Get user organizations
  const fetchOrgs = async () => {
    const res = await fetch(' https://api.github.com/users/oussematn/orgs')
    const data = await res.json()
    return data
  }

  return (
    <div className="App lg:container mx-auto p-4 md:grid md:grid-cols-30-70 gap-8">
      <Profile user={user} orgs={orgs}></Profile>
      <Repos></Repos>
    </div>
  );
}

export default App;
