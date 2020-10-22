const initialState = {
  fields: [
    { id: 0, color: "green", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 1, color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 2, color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 3, color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 4, color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 5, color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 6, color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 7, color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 8, color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 9, color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 10, color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 11, color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 12, color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 13, color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 14, color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 15, color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 16, color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 17, color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 18, color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 19, color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 20, color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 21, color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 22, color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 23, color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 24, color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 25, color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 26, color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 27, color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 28, color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 29, color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 30, color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 31, color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 32, color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 33, color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 34, color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 35, color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 36, color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
  ],
  colorFields: [
    { id: 37, description: "black", color: "black", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 38, description: "red", color: "red", Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
  ],
  partialFields: [
    { id: 38, description: "1-12", color: "green", winFields: [1, 12], Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 39, description: "13-24", color: "green", winFields: [13, 24], Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
    { id: 40, description: "25-36", color: "green", winFields: [25, 36], Bid: 0, ballOnField: false, numOfSets: 0, numOfWins: 0, intervalBetweenWins: 0, intervalBetweenSets: 0 },
  ],
};

export const rouletteReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SET_BET":
      return { ...state, fields: action.fields };
    case "SET_BET_COLOR":
      return { ...state, colorFields: action.fields };
    case "SET_BET_PARTIAL":
      return { ...state, partialFields: action.fields };

    case "GENERATE_NEW_PEOPLE":
      return { ...state, users: action.people, isLoaded: true };
    case "DELETE_PERSON":
      return { ...state, users: action.people };
    case "CLEAR_BETS_COLOR":
      return { ...state, colorFields: action.fields };
    case "CLEAR_BETS_PARTIAL":
      return { ...state, partialFields: action.fields };
    case "CLEAR_BETS":
      return { ...state, fields: action.fields };
    case "SET_BALL_ON_FIELD":
      return { ...state, fields: action.fields, partialFields: action.partialFields, colorFields: action.colorFields };
    case "CLEAR_WIN_STATS":
      return { ...state, fields: action.fields, partialFields: action.partialFields, colorFields: action.colorFields };
    default:
      return state;
  }
};
