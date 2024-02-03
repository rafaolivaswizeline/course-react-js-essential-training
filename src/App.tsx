import { useEffect, useState } from 'react'
import './App.css'

interface LiftData {
  name: string
  status: string
}

function Lift({ name, status }: LiftData) {
  return <>{`${name}: ${status}`}</>
}

function App() {
  const [data, setData] = useState<any>(null)
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
        const url = `https://snowtooth.moonhighway.com/`

        const options: RequestInit = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `query {
              allLifts {
                name
                status
              }
            }`,
          }),
        }

        const data = await (await fetch(url, options)).json()
        console.log(data.data)
        setData(data.data)
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
      <h1>Lifts</h1>
      <ul>
        {data?.allLifts?.map((lift: LiftData) => (
          <li>
            <Lift {...lift}></Lift>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
