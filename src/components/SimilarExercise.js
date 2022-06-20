import React from 'react'
import { Box , Stack , Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'
const SimilarExercise = ({targetMuscleExercise , equipmentExercise}) => {
  return (
    <Box 
      sx={{
        mt: {
          lg: '100px',
          xs :'0'
        }
      }}
    >
        <Typography variant='h4' mb={4}>
          Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
        </Typography>
        <Stack
          direction="row"
          sx={{
            P:'2',
            position:'relative'
          }}
        >
          
          {targetMuscleExercise.length 
            ? <HorizontalScrollbar data={targetMuscleExercise}/> 
            : <Loader />
          }
        </Stack>
        <Typography variant='h4' mb={4} mt={4}>
                    Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises

        </Typography>
        <Stack
          direction="row"
          sx={{
            P:'2',
            position:'relative'
          }}
        >
          
          {equipmentExercise.length 
            ? <HorizontalScrollbar data={equipmentExercise}/> 
            : <Loader />
          }
        </Stack>
    </Box>
  )
}

export default SimilarExercise