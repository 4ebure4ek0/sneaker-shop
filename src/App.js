import {Routes, Route,Link} from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import MainPage from './pages/MainPage'
import CatalogPage from './pages/CatalogPage'
import ProfilePage from './pages/ProfilePage'
import AboutPage from './pages/AboutPage';
import AuthPage from './pages/AuthPage'
import AddPage from './pages/AddPage'
import CatalogBrandPage from './pages/CatalogBrandPage'
import SneakerDetailPage from './pages/SneakerDetailPage'
import logStore from "./components/store/logStore"
import sneakerStore from './components/store/sneakerStore'
import DrawerPage from './pages/DrawerPage'

const App = observer(() => {
  return (
    <>
        <header>
            <Link to='/' className='menu'><img src='./logo.png' alt='logo'/></Link>
            <Link to='/catalog' className='menu'>Catalog</Link>
            <Link to='/about' className='menu'>About us</Link>
            <Link to='/profile' className='menu'>Profile</Link>
            {logStore.isLoggedIn? null: <Link to='/auth' className='menu'>Auth</Link>}
            {logStore.isAdmin? <Link to='/add' className='menu'>Add</Link>: null}
            <Link to='/drawer' className='menu'><svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M19.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 4h17l-2 11H7L5 4zm0 0c-.167-.667-1-2-3-2M20 15H5.23c-1.784 0-2.73.781-2.73 2 0 1.219.946 2 2.73 2H19.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>({sneakerStore.count})</Link>
        </header>
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/catalog' element={<CatalogPage />} />
            <Route path='/catalog/:brand' element={<CatalogBrandPage />} />
            <Route path='/catalog/:brand/:id' element={<SneakerDetailPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/profile' element={<ProfilePage logStore={logStore}/>} />
            <Route path='/auth' element={<AuthPage logStore={logStore}/>} />
            <Route path='/add' element={<AddPage/>} />
            <Route path='/drawer' element={<DrawerPage />} />
        </Routes>
    </>
  );
})

export default App;
