export const toggleSimulationAction = (isActive) => {
    return {
      type: "TOGGLE-SIMULATION",
      isSimulationActive: isActive,
    };
  };