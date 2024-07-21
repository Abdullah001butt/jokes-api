import axios from "axios";

export const fetchJokes = () => async (dispatch) => {
  try {
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
    dispatch({ type: "FETCH_JOKES_SUCCESS", jokes: newJokes });
  } catch (error) {
    dispatch({ type: "FETCH_JOKES_FAILURE", error });
  }
};

export const voteJoke =
  ({ jokeId, vote }) =>
  async (dispatch) => {
    // Your API call or other logic to vote a joke
    dispatch({ type: "VOTE_JOKE", jokeId, vote });
  };
