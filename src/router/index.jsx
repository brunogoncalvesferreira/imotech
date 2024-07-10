import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { Layout } from '../layout/layout'
import { Details } from '../pages/details'
import { Contact } from '../pages/contact'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/contato' element={<Contact/>}/>
      </Route>
    </Routes>
  )
}