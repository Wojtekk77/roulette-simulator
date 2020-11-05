const initialState = {
    currentWinner : 0,
    isSimulationActive : false,
    numOfSimulations : 10,
    speedOfSimulationInMs : 100,
    setAlgorithm01 : false,
    totalWins : 0,
    totalBids : 0, 
    lstOfSets : [],
  };
  export const simulationReducer = (state = initialState, action) => {
    switch (action.type) {
    case "TOGGLE-SIMULATION":
        return { ...state, isSimulationActive:action.isSimulationActive };
    case "TOGGLE-SIMULATION":
        return { ...state, setAlgorithm01 : action.setAlgorithm01 };
    case "SET_BALL_ON_FIELD":
      console.log(state.lstOfSets)
        return { ...state, currentWinner : action.currentWinner, totalBids: state.totalBids + action.totalBids, totalWins:state.totalWins+action.totalWins,  lstOfSets: state.lstOfSets.concat([action.currentWinner])};
    case "CHANGE-NUM-OF-SIMULATION":
      return { ...state, numOfSimulations : action.numOfSimulations };
    case "CHANGE-SPEED-OF-SIMULATION":
      return { ...state, speedOfSimulationInMs : action.speedOfSimulationInMs };
        default:
        return state;
    }
  };