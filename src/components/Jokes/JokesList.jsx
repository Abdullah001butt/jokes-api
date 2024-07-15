import React, { useEffect, useState } from "react";
// React library ko import kar raha hai, aur uske andar se useEffect aur useState ko alag se import kar raha hai.

import { Box, Typography, Button } from "@mui/material";
// Material UI library se Box, Typography, aur Button components ko import kar raha hai.

import "./JokeLists.css";
// Ek CSS file JokeLists.css ko import kar raha hai.

import Joke from "./Joke";
// Ek local component Joke ko import kar raha hai.

import axios from "axios";
// Axios library ko import kar raha hai, jo ki API requests ke liye use hota hai.

export default function App() {
  // Ek default function App ko define kar raha hai, jo ki React application ka main component hai.

  const [jokes, setJokes] = useState(null);
  // Ek state variable jokes ko initialize kar raha hai, aur uske liye ek setJokes function ko bhi define kar raha hai.

  async function getJokes() {
    // Ek async function getJokes ko define kar raha hai.
    let newJokes = [];
    let id = 1;
    for (var i = 0; i < 7; i++) {
      // 7 times API request kar ke jokes fetch karta hai.
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      newJokes.push({ id: i, text: res.data.joke, votes: 0 });
    }
    setJokes(newJokes);
    // Jokes ko setJokes function ke through jokes state variable me store karta hai.
  }

  useEffect(() => {
    getJokes();
  }, []);
  // Ek useEffect hook ko use kar raha hai, jo ki getJokes function ko call karta hai, jab application load hota hai.

  const handleFetchJokes = () => {
    getJokes();
  };
  // Ek function handleFetchJokes ko define kar raha hai, jo ki getJokes function ko call karta hai.

  const handleVote = (id, vote) => {
    // Ek function handleVote ko define kar raha hai, jo ki jokes ke votes ko update karta hai.
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
  // Ek variable sortedJokes ko define kar raha hai, jo ki jokes ko votes ke hisab se sort karta hai.

  if (jokes) {
    // Ek conditional statement hai, jo ki jokes ke availability ke hisab se different UI components render karta hai.
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
