import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

// layouts
import Navbar from './layouts/Navbar'

// Pages
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Plans from './pages/Plans'
import Error from './pages/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='plans' element={<Plans />}/>
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App