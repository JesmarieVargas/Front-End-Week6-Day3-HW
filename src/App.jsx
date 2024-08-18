import {Routes, Route } from "react-router-dom"
import Home from './components/Home'
import NavBar from "./components/NavBar"
import BrowseCharacters from './components/BrowseCharacters'
import CharacterDetail from './components/CharacterDetails'
import Comics from './components/Comics'
import NotFound from "./components/NotFound"
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path='/characters' element={<BrowseCharacters />} />
        <Route path='/characters/:id' element={<CharacterDetail />} />
        <Route path="/comics" element={<Comics />} />

        <Route path='*' element={<NotFound />} />  
      </Routes>
    </>
  )
}

export default App
