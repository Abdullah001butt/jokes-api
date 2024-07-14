import React from "react";
import styles from "./App.Styles";
import JokesList from "./components/Jokes/JokesList";

function app() {
  return (
    <div style={styles.app}>
      <JokesList />
    </div>
  );
}

export default app;
