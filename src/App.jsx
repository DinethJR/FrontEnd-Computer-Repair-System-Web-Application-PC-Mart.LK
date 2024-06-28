
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListRepairRequestComponent from './components/ListRepairRequestComponent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import RepairRequestComponent from './components/RepairRequestComponent'
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import LoginForm from './pages/LoginForm'
//import AdminLogin from './pages/AdminLogin'




function App() {
  

  return (
    <>
    <BrowserRouter>
     <HeaderComponent/>
     <Routes>
          {/* //http://localhost:3000 */}
        { <Route path='/admin' element ={ <ListRepairRequestComponent/>}></Route> } 
        {/* //http://localhost:3000/repairrequest */}
        <Route path='/repairrequest' element ={ <ListRepairRequestComponent/>}></Route>
        {/* //http://localhost:3000/add-repair */}
        <Route path='/add-repair' element ={ <RepairRequestComponent/>}></Route>
        {/* //http://localhost:3000/edit-repairrequest/1 */}
        <Route path='/edit-repairrequest/:id' element ={<RepairRequestComponent/>}></Route>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/' element={<HomePage />} />
       <Route path='/contact' element={<ContactPage />} /> 
        <Route path='/adminlog' element={<LoginForm />} />   


     </Routes>
     
    </BrowserRouter>
    </>
  ) 
}

export default App
