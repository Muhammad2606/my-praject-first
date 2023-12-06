import { Box } from '@mui/material';
import {Ani, Banner, Dc, Marvel, Navbar} from '../index';
import  './App.css';
import { Route,  Routes } from 'react-router-dom';


const App = () => {
  

  



  
  

  return (
    <Box>
      <Navbar/>

      <Routes>
      <Route path='/' element={<Banner/>}/>
      <Route path='/marvel' element={<Marvel/>}/>
      <Route path='/ani' element={<Ani/>}/>
      <Route path='/dc' element={<Dc/>}/>

      </Routes>
   
    </Box> 
    
  )
}

export default App