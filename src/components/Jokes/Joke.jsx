import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import "./Joke.css";

export default function Joke({ text, id, onVote }) {
  const [voteCount, setVoteCount] = useState(0);
  const [votes, setVotes] = useState(0);

  const handleVoteUp = () => {
    setVoteCount(voteCount + 1);
    setVotes(votes + 1);
    onVote(1);
  };

  const handleVoteDown = () => {
    setVoteCount(voteCount - 1);
    setVotes(votes - 1);
    onVote(-1);
  };

  return (
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
  );
}
