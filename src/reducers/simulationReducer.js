const initialState = {
    currentWinner: 0,
    isSimulationActive: false,
    numOfSimulations: 100,
    speedOfSimulationinMs: 100,
    setAlgorithm01:false,
  };
  export const simulationReducer = (state = initialState, action) => {
    switch (action.type) {
    case "TOGGLE-SIMULATION":
        return { ...state, isSimulationActive:action.isSimulationActive };
    case "TOGGLE-SIMULATION":
        return { ...state, setAlgorithm01 : action.setAlgorithm01 };
    case "SET_BALL_ON_FIELD":
        return { ...state, currentWinner : action.currentWinner };
      default:
        return state;
    }
  };