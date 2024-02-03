import { useEffect, useState } from 'react'
import './App.css'

interface ProfileData {
  login: string
  created_at: string
  avatar_url: string
}

function Profile({ login, created_at, avatar_url }: ProfileData) {
  return (
    <>
      <h1>{login}</h1>
      <img src={avatar_url} alt={`${login} avatar`} height={150} />
      <ul>
        <li>Created at {new Date(created_at).toLocaleString('es-MX')}</li>
      </ul>
    </>
  )
}

function App() {
  const [data, setData] = useState<any>('nothing')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    setLoading(true)

    function wait(time: number) {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve()
        }, time)
      })
    }

    async function fetchProfile() {
      try {
        await wait(3000)
        const url = `https://api.github.com/users/rafaolivas19`
        const data = await (await fetch(url)).json()
        setData(data)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }

    fetchProfile()
  }, [])

  if (error) {
    return (
      <>
        <h1>Error</h1>
        <pre>{error.toString()}</pre>
      </>
    )
  }

  if (loading) {
    return (
      <>
        <h1>Wait for it...</h1>
      </>
    )
  }

  return (
    <>
      <Profile {...data}></Profile>
    </>
  )
}

export default App
