import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom" 
import { MainPage } from './pages/MainPage/mainpage'
// import { ItemPage } from './pages/ItemPage/ItemPage'
import { ItemPage } from './pages/ItemPage/modal'
import { Layout } from './components/Layout/layout'
import { Basket } from './pages/Basket/basket'
import { NotFound } from './pages/NotFound'
import { AuthPage } from './pages/AuthPage/auth'
import { AdminPage } from './pages/AdminPanel/admin'
import { PostPage } from './pages/AdminPanel/createPage'
import { EditPage } from './pages/AdminPanel/editPage'
import { About } from './pages/About/about'
import { Contacts } from './pages/Contacts/contacts'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage/>}/>
          <Route path='/card/:id' element={<ItemPage/>}/>
          <Route path='/basket' element={<Basket/>} />
          <Route path='/about'  element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>} />
        </Route>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="*" element={<NotFound />}/>
        <Route path='/admin'  element={<AdminPage/>}/>
        <Route path='/edit/:id' element={<EditPage/>} />
        <Route path='/create' element={<PostPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
