import ColorFields from "../components/rouletteBoard/sideFields/ColorFields";

export const clearStatsAction = (fields, colorFields, partialFields) => {
  const clearedStatWins = fields.map((field) => {
    field.numOfWins = 0;
    field.numOfSets = 0;
    return field
  })

  const clearedColorStatWins = colorFields.map((field) => {
    field.numOfWins = 0;
    field.numOfSets = 0;
    return field
  })

  const clearedPartialStatWins = partialFields.map((field) => {
    field.numOfWins = 0;
    field.numOfSets = 0;
    return field
  })

  return {
    type: "CLEAR_WIN_STATS",
    fields: clearedStatWins,
    colorFields: clearedColorStatWins,
    partialFields: clearedPartialStatWins
  };
};
