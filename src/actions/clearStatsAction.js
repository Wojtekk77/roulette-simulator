export const clearStatsAction = (fields) => {
    const clearedStatWins = fields.map((field) => 
    {
        field.numOfWins = 0;
        field.numOfSets = 0;
        return  field
    })
      return {
        type: "CLEAR_WIN_STATS",
        fields : clearedStatWins
      };
    };
    