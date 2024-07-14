import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import "./JokeLists.css";
import Joke from "./Joke";
import axios from "axios";

export default function App() {
  const [jokes, setJokes] = useState(null);

  async function getJokes() {
    let newJokes = [];
    let id = 1;
    for (var i = 0; i < 7; i++) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      newJokes.push({ id: i, text: res.data.joke, votes: 0 });
    }
    setJokes(newJokes);
  }

  useEffect(() => {
    getJokes();
  }, []);

  const handleFetchJokes = () => {
    getJokes();
  };

  const handleVote = (id, vote) => {
    setJokes(
      jokes.map((joke) => {
        if (joke.id === id) {
          joke.votes += vote;
        }
        return joke;
      })
    );
  };

  const sortedJokes = jokes ? jokes.sort((a, b) => b.votes - a.votes) : [];

  if (jokes) {
    return (
      <Box className="jokesList">
        <Box className="jokesListSidebar">
          <Typography className="jokeListTitle">
            <h1>Dad</h1>
            <h1>Jokes</h1>
          </Typography>
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
          {sortedJokes.map((joke) => {
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
  } else {
    return <h1>Loading...</h1>;
  }
}
