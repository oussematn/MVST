import { useEffect, useState } from "react"
import Profile from './components/Profile'
import Repos from './components/Repos'

/** The app main component */
function App() {
  /** The app full URL*/
  const url = new URL(window.location.href);
  /** The github username which will be fetched */
  const username = url.searchParams.get('username') ? url.searchParams.get('username') : 'oussematn';
  /** the user info fetched from the GitHub API */
  const [user, setUser] = useState([])
  /** the user organizations fetched from the GitHub API */
  const [orgs, setOrgs] = useState([])
  /** the user repositories fetched from the GitHub API */
  const [repos, setRepos] = useState([])

  useEffect(() => {
    // set current user info when app is loaded
    const getUser = async () => {
      const user = await fetchUser()
      setUser(user)
    }

    // set current user organizations when app is loaded
    const getOrgs = async () => {
      const orgs = await fetchOrgs()
      setOrgs(orgs)
    }

    // set current user repositories when app is loaded
    const getRepos = async () => {
      const repos = await fetchRepos()
      setRepos(repos)
    }

    getUser()
    getOrgs()
    getRepos()
  }, [])

  // Get user data from the GitHub API
  const fetchUser = async () => {
    const res = await fetch(` https://api.github.com/users/${username}`)
    const user = await res.json()
    return user
  }

  // Get user organizations from the GitHub API
  const fetchOrgs = async () => {
    const res = await fetch(` https://api.github.com/users/${username}/orgs`)
    const orgs = await res.json()
    return orgs
  }

  // Get user repos from the GitHub API
  const fetchRepos = async () => {
    const res = await fetch(` https://api.github.com/users/${username}/repos`)
    const repos = await res.json()
    return repos
  }

  return (
    <div className="App lg:container mx-auto p-4 md:grid md:grid-cols-30-70 gap-8" data-testid='app'>
      <Profile user={user} orgs={orgs}></Profile>
      <Repos repos={repos}></Repos>
    </div>
  );
}

export default App;
