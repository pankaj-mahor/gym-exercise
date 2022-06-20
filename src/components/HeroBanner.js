import React from 'react'
import {Box ,  Typography , Button} from '@mui/material'


import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box
    sx={{mt: {lg:'200px' , xs: '70px'}, ml:{sm:'50px'}}} 
    position="relative"
    p="20px"
    >
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography sx={{ fontSize: {lg:'44px', xs: '40px'}}} lineHeight={1.2} fontWeight={700} mt="20px" mb="10px">
            Sweat, Smile <br /> and Repeat
        </Typography>

        <Typography lineHeight="35px" color="#333333" fontSize="22px" mb={4}>
            Check out the most effective exercises
        </Typography>
      
        <Button variant="contained" color="error" href="#exercises"
        sx={{
            backgroundColor: '#ff2625',
            padding: '10px'
        }}
        >Explore Exercise</Button>
        <Typography fontWeight={600}
            color="#ff2625"
            sx={{
                opacity: 0.1,
                display: {lg:'block' , xs:'none'}
            }}
            fontSize='200px'
        >
            Exercise
        </Typography>

        <img  src={HeroBannerImage} alt="banner" className="hero-banner-img" 
      
                
               
                />
    </Box>
  )
}

export default HeroBanner