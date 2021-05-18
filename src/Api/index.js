import axios from 'axios'

const url = 'https://spotify-api-wrapper.appspot.com'
export const fetchData = async (artistQuery) => {
  try {
    const { data } = await axios.get(`${url}/artist/${artistQuery}`)

    if (data.artists.total > 0) {
      const modiFiedData = data?.artists?.items?.map((artist) => ({
        id: artist.id,
        followers: artist.followers.total,
        name: artist.name,
        popularity: artist.popularity,
        images: artist.images.map((i) => ({
          height: i.height,
          url: i.url,
          width: i.width,
        })),
        genres: artist.genres,
      }))

      return modiFiedData
    } else {
      return ''
    }
  } catch (error) {
    console.log(error)
  }
}

export const fetchArtist = async (id) => {
  try {
    const { data } = await axios.get(`${url}/artist/${id}/top-tracks`)
    const modiFiedData = data?.tracks.map((track) => ({
      name: track.name,
      id: track.id,
      is_playable: track.is_playable,
      preview_url: track.preview_url,
      images: track?.album?.images.map((i) => ({
        height: i.height,
        url: i.url,
        width: i.width,
      })),
    }))
    return modiFiedData
  } catch (error) {
    console.log(error)
  }
}
