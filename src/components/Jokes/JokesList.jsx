import React, { useEffect } from "react";
import "./JokeLists.css";
import { Box, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Joke from "./Joke";
import { fetchJokes, voteJoke } from "../../actions/jokes";

export default function App() {
  const dispatch = useDispatch();
  const jokes = useSelector((state) => state.jokes.jokes);
  const loading = useSelector((state) => state.jokes.loading);

  useEffect(() => {
    dispatch(fetchJokes());
  }, []);

  const handleFetchJokes = () => {
    dispatch(fetchJokes());
  };

  const handleVote = (id, vote) => {
    dispatch(voteJoke({ jokeId: id, vote }));
  };

  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <Box className="jokesList">
      <Box className="jokesListSidebar">
        <Box className="jokeListTitle">
          <div>
            <h1>Dad</h1>
            <h1>Jokes</h1>
          </div>
        </Box>
        <h1 className="w-96 shadow-lg">😆</h1>
        <Button
          variant="contained"
          onClick={handleFetchJokes}
          className="button-fetch"
        >
          Fetch Jokes
        </Button>
      </Box>
      <Box className="jokesListJokes">
        {jokes.map((joke) => {
          return (
            <Joke
              votes={joke.votes}
              text={joke.text}
              key={joke.id}
              onVote={(vote) => handleVote(joke.id, vote)}
            />
          );
        })}
      </Box>
    </Box>
  );
}
