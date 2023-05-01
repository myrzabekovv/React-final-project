import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom" 
import { MainPage } from './pages/MainPage/mainpage'
import { ItemPage } from './pages/ItemPage/ItemPage'
import { Layout } from './components/Layout/layout'
import { Basket } from './pages/Basket/basket'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage/>}/>
          <Route path='/item' element={<ItemPage/>}/>
          <Route path='/basket' element={<Basket/>} />
        </Route>
        <Route path="/admin" element={<div>Admin page</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
