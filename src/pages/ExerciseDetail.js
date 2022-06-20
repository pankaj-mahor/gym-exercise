import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions , fetchData , youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideo from '../components/ExerciseVideo'
import SimilarExercise from '../components/SimilarExercise'

const ExerciseDetail = () => {
    const[exerciseDetail , setExerciseDetail] = useState({})
    const[exerciseVideos , setExerciseVideos] = useState([])
    const[targetMuscleExercise , setTargetMuscleExercise] = useState([])
    const[equipmentExercise , setEquipmentExercise] = useState([])
    const {id} = useParams();
    useEffect(()=>{
     const fetchExerciseData = async () =>{

      try{

        const exerciseDBurl = 'https://exercisedb.p.rapidapi.com';
        // const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
  
  
        const exerciseDetailData = await fetchData(`${exerciseDBurl}/exercises/exercise/${id}` , exerciseOptions)
        // console.log(exerciseDetailData)
        setExerciseDetail(exerciseDetailData)
        
        // const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetail.name}` , youtubeOptions )
      
        // console.log(exerciseVideoData.contents)  
        // console.log(exerciseDetail.name)
        // console.log(exerciseVideoData)
        // setExerciseVideos(exerciseVideoData.contents)
        // console.log(exerciseDetail.target)
      }
      catch(error){
        console.log(error)
      }
          
        }



      fetchExerciseData()
    } , [id])

    useEffect(()=>{

    
         const fetchYoutubeSearch = async ()=>{
           try{

             const exerciseDBurl = 'https://exercisedb.p.rapidapi.com';

             const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
             const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetail.name} exercise` , youtubeOptions )
             setExerciseVideos(exerciseVideoData.contents)
             //
             const targetMuscleExerciseData = await fetchData(`${exerciseDBurl}/exercises/target/${exerciseDetail.target}` , exerciseOptions)
             // console.log(targetMuscleExercise)
             setTargetMuscleExercise(targetMuscleExerciseData)
             const equipmentExerciseData = await fetchData(`${exerciseDBurl}/exercises/equipment/${exerciseDetail.equipment}` , exerciseOptions)
             setEquipmentExercise(equipmentExerciseData)
           }catch(error){
            console.log(error)
           }
        }
 
      fetchYoutubeSearch()
    }, [exerciseDetail])

    console.log(exerciseDetail)
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercise  targetMuscleExercise={targetMuscleExercise} equipmentExercise={equipmentExercise}/>
    </Box>
  )
}

export default ExerciseDetail