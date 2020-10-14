export const clearAllBetsAction = (fields) => {
  const clearedFields = fields.map((field) => 
  {
      field.Bid = 0
      return  field
  })
    return {
      type: "CLEAR_BETS",
      fields : clearedFields 
    };
  };
  