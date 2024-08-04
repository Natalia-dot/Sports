import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer, Header, Loading } from './components'
import { Suspense } from 'react'

const App =()=>{


  return (
    <>
      <Suspense fallback={Loading} >
     <Header/>
    <main>
      <Suspense fallback={Loading}>
      <Outlet/>
      </Suspense>
    </main>
    <Footer/>
    </Suspense>

    </>
  )
}

export default App
