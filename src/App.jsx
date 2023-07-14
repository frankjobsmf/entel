import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FormPage } from './components/pages/form/FormPage'
import { ListPage } from './components/pages/list/ListPage'
import { Navbar } from './ui/Navbar'

export const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="" element={<FormPage/>} />
      <Route path="listado" element={<ListPage/>} />
    </Routes>
    
    </>
  )
}
