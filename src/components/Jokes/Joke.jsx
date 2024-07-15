import React, { useState } from "react";
// React library ko import kar raha hai, aur uske andar se useState ko alag se import kar raha hai.

import { Box, Typography } from "@mui/material";
// Material UI library se Box aur Typography components ko import kar raha hai.

import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
// Material UI library se ArrowUpward aur ArrowDownward icons ko import kar raha hai.

import "./Joke.css";
// Ek CSS file Joke.css ko import kar raha hai.

export default function Joke({ text, id, onVote }) {
  // Ek default function Joke ko define kar raha hai, jo ki ek joke ka representation hai.
  // Is function ko three props mil rahe hain: text, id, aur onVote.

  const [voteCount, setVoteCount] = useState(0);
  // Ek state variable voteCount ko initialize kar raha hai, aur uske liye ek setVoteCount function ko bhi define kar raha hai.

  const [votes, setVotes] = useState(0);
  // Ek state variable votes ko initialize kar raha hai, aur uske liye ek setVotes function ko bhi define kar raha hai.

  const handleVoteUp = () => {
    // Ek function handleVoteUp ko define kar raha hai, jo ki vote count ko increment karta hai.
    setVoteCount(voteCount + 1);
    setVotes(votes + 1);
    onVote(1);
  };

  const handleVoteDown = () => {
    // Ek function handleVoteDown ko define kar raha hai, jo ki vote count ko decrement karta hai.
    if (votes > 0) {
      setVoteCount(voteCount - 1);
      setVotes(votes - 1);
      onVote(-1);
    }
  };

  return (
    <>
      <div className="container">
        <Box className="joke">
          <Box className="jokeButtons">
            <span onClick={handleVoteUp}>
              <ArrowUpward className="arrowIcon" />
            </span>
            <Typography className="votesLabel">{votes}</Typography>
            <span onClick={handleVoteDown}>
              <ArrowDownward className="arrowIcon" />
            </span>
          </Box>
          <Box className="jokeText">{text}</Box>
          <Box className="jokeEmoji">
            {voteCount <= 5 ? (
              <span role="img" aria-label="laughing face">
                😂
              </span>
            ) : voteCount <= 10 ? (
              <span role="img" aria-label="smiling face">
                😊
              </span>
            ) : voteCount <= 20 ? (
              <span role="img" aria-label="grinning face">
                😁
              </span>
            ) : voteCount > 20 ? (
              <span role="img" aria-label="rolling on the floor laughing">
                🤣
              </span>
            ) : voteCount < 0 ? (
              <span role="img" aria-label="crying face">
                😭
              </span>
            ) : (
              <span role="img" aria-label="smiling face with smiling eyes">
                😊
              </span>
            )}
          </Box>
        </Box>
      </div>
    </>
  );
}
