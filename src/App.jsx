
import React from 'react'
import Block from './components/Block'
import Boxs from './components/Boxs'
import store from './redux/store'
import { Provider } from 'react-redux'
import ControlPanel from './components/ControlPanel'

const App = () => {
  return (
    <Provider store={store}> 
    <div className='container mx-auto p-3 md:p-7 grid grid-cols-1 md:grid-cols-2  gap-4'>
      <ControlPanel/>
    </div>
    </Provider>
  )
}

export default App