import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <div className='navbar-structure'>
        <div className='navbar-structure-desktop'>
          <Navbar />
        </div>
        <div className='navbar-structure-mobile'>
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        </div>
      </div>
      <Container customClass='minHeight'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/aboutus' element={<Company/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/newproject' element={<NewProject/>} />
          <Route path='/project/:id' element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;