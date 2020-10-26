import { combineReducers } from "redux";

import { rouletteReducer } from "./rouletteReducer";
import { simulationReducer } from "./simulationReducer";

export const rootReducer = combineReducers({
  roulette: rouletteReducer,
  simulation: simulationReducer,
});