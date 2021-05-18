import React, { useEffect, useState } from 'react'

const useAudio = (url) => {
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [audio])

  return [playing, toggle]
}

const Tracks = ({ track }) => {
  const { id, name, preview_url, images } = track

  const [playing, toggle] = useAudio(preview_url)

  const trackIcon = (preview_url) => {
    if (!preview_url) {
      return <span>N/A</span>
    }
    if (playing) {
      return <span>| |</span>
    }

    return <span>&#9654;</span>
  }

  return (
    <>
      <div className='track' key={id} onClick={toggle}>
        <img
          src={images[0] && images[0].url}
          alt='artist-profile'
          alt='track-image'
          className='track-image'
        />
        <p className='track-text'>{name}</p>
        <p className='track-icon'>{trackIcon(preview_url)}</p>
      </div>
    </>
  )
}

export default Tracks
