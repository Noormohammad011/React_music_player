import React, { useEffect, useState } from 'react'
import { fetchArtist } from '../Api'
import Tracks from './Tracks'
const Artist = ({ artist }) => {
  const [tracks, setTracks] = useState([])
  const { id, images, name, followers, genres } = artist

  useEffect(() => {
    const fetchApi = async () => {
      setTracks(await fetchArtist(id))
    }

    fetchApi()
  }, [id])
  console.log(tracks)

  return (
    <div>
      <h3>{name}</h3>
      <p>{followers} followers</p>
      <p>{genres.join(', ')}</p>
      <img
        src={images[0] && images[0].url}
        alt='artist-profile'
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          objectFit: 'cover',
        }}
      />
      {tracks &&
        tracks?.map((track) => (
          <>
            <Tracks track={track} />
          </>
        ))}
    </div>
  )
}

export default Artist
