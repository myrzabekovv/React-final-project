import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom" 
import { MainPage } from './pages/MainPage/mainpage'
import { ItemPage } from './pages/ItemPage/ItemPage'
import { Layout } from './components/Layout/layout'
import { Basket } from './pages/Basket/basket'
import { NotFound } from './pages/NotFound'
import { AuthPage } from './pages/AuthPage/auth'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage/>}/>
          <Route path='/item/:id' element={<ItemPage/>}/>
          <Route path='/basket' element={<Basket/>} />
        </Route>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
