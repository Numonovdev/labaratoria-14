
import React from 'react'
import Block from './components/Block'
import Boxs from './components/Boxs'

const App = () => {
  return (
    <div className='container mx-auto p-3 md:p-7 grid grid-cols-1 md:grid-cols-2  gap-4'>
      <Boxs/>
      <Block/>

    </div>
  )
}

export default App