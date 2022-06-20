import React ,{useState , useEffect} from 'react'
// import { Pagination } from '@mui/material/Pagination'
import { Link } from 'react-router-dom'
import { Box , Stack , Typography ,Pagination  } from '@mui/material'


import { exerciseOptions , fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
const Exercises = ({exercises , setExercises , bodyPart}) => {
  const[currentPage , setCurrentPage] = useState(1)
  const exercisePerPage = 9;
  const   indexofLastExercise = currentPage * exercisePerPage;
  const   indexofFirstExercise = indexofLastExercise - exercisePerPage;
  const currentExercises = exercises.slice(indexofFirstExercise , indexofLastExercise)
  // console.log(exercises)
  // console.log('Last' , indexofLastExercise)
  // console.log('First' , indexofFirstExercise)
  // console.log('Current', currentExercises)
  //done passing done by Mui 
  const paginate = (e , value) =>{
    setCurrentPage(value);

    window.scrollTo({top:1800 , behavior: 'smooth'})
  }

  useEffect(()=>{
    const fetchExerciseData = async ()=>{
        let exercisesData = [];
        if(bodyPart === 'all'){
          exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises" , exerciseOptions)
        }
        else{
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}` , exerciseOptions)

        }

        setExercises(exercisesData)
    }

    fetchExerciseData();
  } , [bodyPart])
  // console.log('top' , exercises)
  return (
    <Box
      id="exercises"
      sx={{
        mt:{
          lg: '110px'
        }
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap:{
            lg:'110px',
            xs: '50px',
          }
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {/* {console.log(exercises)} */}

        {currentExercises?.length > 0 ?
       ( currentExercises.map((exercise , index)=>{
          // <p>{exercise.name}</p>
          return <ExerciseCard key={index} exercise={exercise} />
          // console.log(exercise)
        })) : (
          <div>
            <p> " No Exercises Found. Try searching differnt Keywords or exercises "</p>
          
          </div>
        )}
      </Stack>
      <Stack mt='100px' alignItems="center">
            {exercises.length > 9 && (
              <Pagination 
                color="primary"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisePerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
              />
            )}
    </Stack>
    </Box>
  )
}

export default Exercises