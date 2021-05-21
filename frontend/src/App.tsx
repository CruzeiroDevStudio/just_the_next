import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('/api/message')

      setData(res.data)
    }
    fetchData()
  }, [])

  return (
    <>
      <h1>Just The Next</h1>

      <p>{data ? data : 'Loading'}</p>
    </>
  )
}

export default App
