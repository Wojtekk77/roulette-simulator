const initialState = {
    isSimulationActive: false,
    numOfSimulations: 100,
    speedOfSimulationinMs: 100,
  };
  export const simulationReducer = (state = initialState, action) => {
    switch (action.type) {
    case "TOGGLE-SIMULATION":
        return { ...state, isSimulationActive:action.isSimulationActive };
      default:
        return state;
    }
  };