const initialState = {
  fields: [
    { id: 0, color: "green", Bid: 0, ballOnField: false },
    { id: 1, color: "red", Bid: 0, ballOnField: false },
    { id: 2, color: "black", Bid: 0, ballOnField: false },
    { id: 3, color: "red", Bid: 0, ballOnField: false },
    { id: 4, color: "black", Bid: 0, ballOnField: false },
    { id: 5, color: "red", Bid: 0, ballOnField: false },
    { id: 6, color: "black", Bid: 0, ballOnField: false },
    { id: 7, color: "red", Bid: 0, ballOnField: false },
    { id: 8, color: "black", Bid: 0, ballOnField: false },
    { id: 9, color: "red", Bid: 0, ballOnField: false },
    { id: 10, color: "black", Bid: 0, ballOnField: false },
    { id: 11, color: "black", Bid: 0, ballOnField: false },
    { id: 12, color: "red", Bid: 0, ballOnField: false },
    { id: 13, color: "black", Bid: 0, ballOnField: false },
    { id: 14, color: "red", Bid: 0, ballOnField: false },
    { id: 15, color: "black", Bid: 0, ballOnField: false },
    { id: 16, color: "red", Bid: 0, ballOnField: false },
    { id: 17, color: "black", Bid: 0, ballOnField: false },
    { id: 18, color: "red", Bid: 0, ballOnField: false },
    { id: 19, color: "red", Bid: 0, ballOnField: false },
    { id: 20, color: "black", Bid: 0, ballOnField: false },
    { id: 21, color: "red", Bid: 0, ballOnField: false },
    { id: 22, color: "black", Bid: 0, ballOnField: false },
    { id: 23, color: "red", Bid: 0, ballOnField: false },
    { id: 24, color: "black", Bid: 0, ballOnField: false },
    { id: 25, color: "red", Bid: 0, ballOnField: false },
    { id: 26, color: "black", Bid: 0, ballOnField: false },
    { id: 27, color: "red", Bid: 0, ballOnField: false },
    { id: 28, color: "black", Bid: 0, ballOnField: false },
    { id: 29, color: "black", Bid: 0, ballOnField: false },
    { id: 30, color: "red", Bid: 0, ballOnField: false },
    { id: 31, color: "black", Bid: 0, ballOnField: false },
    { id: 32, color: "red", Bid: 0, ballOnField: false },
    { id: 33, color: "black", Bid: 0, ballOnField: false },
    { id: 34, color: "red", Bid: 0, ballOnField: false },
    { id: 35, color: "black", Bid: 0, ballOnField: false },
    { id: 36, color: "red", Bid: 0, ballOnField: false },
  ],
  colorFields: [
    { id: 37, color: "black", Bid: 0, ballOnField: false },
    { id: 38, color: "red", Bid: 0, ballOnField: false },
  ],
  partialFields: [
    { id: 38, winFields: [1, 12], Bid: 0, ballOnField: false },
    { id: 39, winFields: [13, 24], Bid: 0, ballOnField: false },
    { id: 40, winFields: [25, 36], Bid: 0, ballOnField: false },
  ],
};

export const rouletteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BET":
      return { ...state, fields: action.fields };
    case "GENERATE_NEW_PEOPLE":
      return { ...state, users: action.people, isLoaded: true };
    case "DELETE_PERSON":
      return { ...state, users: action.people };
    case "CLEAR_BETS":
      return { ...state, fields: action.fields };
    case "SET_BALL_ON_FIELD":
      console.log("SET_BALL_ON_FIELD");
      return { ...state, fields: action.fields };
    default:
      return state;
  }
};
