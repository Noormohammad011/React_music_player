import React, { useEffect, useState } from 'react'
import { fetchData } from './Api'
import Artist from './components/Artist'
import Search from './components/Search'
import './App.css'

const App = () => {
  const [artists, setArtists] = useState([])

  const [query, setQuery] = useState('')
  useEffect(() => {
    const fetchApiArtist = async () => {
      setArtists(await fetchData(query))
    }

    fetchApiArtist()
  }, [query])

  return (
    <div className='container'>
      <div className='row'>
        <div>Music Master</div>
      </div>
      <div>
        <Search
          getQuery={(q) => {
            setQuery(q)
          }}
        />
      </div>

      <div className='container'>
        <div className='row'>
          {artists &&
            artists.map((artist) => (
              <>
                <Artist artist={artist} />
              </>
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
