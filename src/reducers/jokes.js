const initialState = {
  jokes: [],
  loading: false,
  error: null,
};

export default function jokesReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_JOKES_SUCCESS":
      return { ...state, jokes: action.jokes, loading: false };
    case "FETCH_JOKES_FAILURE":
      return { ...state, error: action.error, loading: false };
    case "VOTE_JOKE":
      return {
        ...state,
        jokes: state.jokes.map((joke) => {
          if (joke.id === action.jokeId) {
            return { ...joke, votes: joke.votes + action.vote };
          }
          return joke;
        }),
      };
    default:
      return state;
  }
}
