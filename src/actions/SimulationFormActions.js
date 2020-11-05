export const changeNumberOfSimulations = (numOfSimulations) => {
    return {
      type: "CHANGE-NUM-OF-SIMULATION",
      numOfSimulations,
    };
  };

  export const changeSpeedOfSimulations = (speedOfSimulationInMs) => {
    return {
      type: "CHANGE-SPEED-OF-SIMULATION",
      speedOfSimulationInMs,
    };
  };
  