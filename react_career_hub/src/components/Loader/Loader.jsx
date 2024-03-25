import React from 'react'
import { PacmanLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <PacmanLoader size={100} color='#36d7b7'></PacmanLoader>
    </div>
  )
}

export default Loader