import React from 'react'
import Chat from '../components/Chat'
import Search from '../components/Search'

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
        <Chat/>
        <Search/>
    </div>
  )
}

export default Home