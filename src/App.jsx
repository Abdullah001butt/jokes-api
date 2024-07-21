import React from "react";
import styles from "./App.Styles";
import JokesList from "./components/Jokes/JokesList";
import { Provider } from "react-redux";
import store from "./app/store";

function app() {
  return (
    <Provider store={store}>
      <div style={styles.app}>
        <JokesList />
      </div>
    </Provider>
  );
}

export default app;
