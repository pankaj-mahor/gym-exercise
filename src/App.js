import React from 'react'
import {Route , Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
import './App.css'
import TopExercises from './components/TopExercises';
const App = () => {
  return (
    <Box width="400px" sx={{width: {xl : '1488px'}}} m="auto">
     <Navbar />
     <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/exercise/:id" element={<ExerciseDetail />}/>
      
     </Routes>
     <Footer />
    </Box>
  )
}

export default App