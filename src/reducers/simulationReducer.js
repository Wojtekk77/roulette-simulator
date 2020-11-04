const initialState = {
    currentWinner: 0,
    isSimulationActive: false,
    numOfSimulations: 10,
    speedOfSimulationInMs: 500,
    setAlgorithm01:false,
    totalWins:0,
    totalBids:0, 
  };
  export const simulationReducer = (state = initialState, action) => {
    switch (action.type) {
    case "TOGGLE-SIMULATION":
        return { ...state, isSimulationActive:action.isSimulationActive };
    case "TOGGLE-SIMULATION":
        return { ...state, setAlgorithm01 : action.setAlgorithm01 };
    case "SET_BALL_ON_FIELD":
        return { ...state, currentWinner : action.currentWinner, totalBids: state.totalBids + action.totalBids, totalWins:state.totalWins+action.totalWins };
    case "CHANGE-NUM-OF-SIMULATION":
      return { ...state, numOfSimulations : action.numOfSimulations };
        default:
        return state;
    }
  };