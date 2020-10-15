export const clearAllBetsAction = (fields) => {
  const clearedFields = fields.map((field) => {
    field.Bid = 0
    return field
  })
  return {
    type: "CLEAR_BETS",
    fields: clearedFields
  };
};

export const clearColorBetsAction = (fields) => {
  const clearedFields = fields.map((field) => {
    field.Bid = 0
    return field
  })
  return {
    type: "CLEAR_BETS_COLOR",
    fields: clearedFields
  };
};


export const clearPartialBetsAction = (fields) => {
  const clearedFields = fields.map((field) => {
    field.Bid = 0
    return field
  })
  return {
    type: "CLEAR_BETS_PARTIAL",
    fields: clearedFields
  };
};
