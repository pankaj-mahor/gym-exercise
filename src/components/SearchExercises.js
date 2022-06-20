import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercise = async () => {
      const bodyParts = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyParts]);
    };

    fetchExercise();
  }, []);
  //Handle search Function
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      // console.log(exerciseData);
      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)
      );
      setSearch("");
      console.log(searchedExercises)
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" p="20px" mt="37px">
      <Typography
        fontWeight={700}
        textAlign="center"
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          },
        }}
      >
        Awesome Exercise You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px" mt="44px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "700px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="75px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercise"
          type="text"
        />

        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: {
              lg: "175px",
              xs: "80px",
            },

            fontSize: {
              lg: "20px",
              xs: "14px",
            },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
          //
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyPart
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
