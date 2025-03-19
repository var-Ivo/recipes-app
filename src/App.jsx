import '../public/styles.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import SideNav from './Components/SideNav.jsx';
import Header from './Components/Header.jsx'

function App() {

  return (
    <div className='grid-container'>
      <Header className='header' />
      <SideNav className='side-nav' />
        <div className='main'>
      <Routes>
          <Route path='/' element={<Home />} />
      </Routes>
        </div>
    </div>
  )
}

export default App;
