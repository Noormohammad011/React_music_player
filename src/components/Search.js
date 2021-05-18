import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')
  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }
  return (
    <div>
      <form>
        <form>
          <input
            type='text'
            className='form-control'
            placeholder='Search Artist'
            value={text}
            onChange={(e) => onChange(e.target.value)}
            autoFocus
          />
        </form>
      </form>
    </div>
  )
}

export default Search
