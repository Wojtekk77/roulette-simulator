export const throwBallAction = (fields, colorFields, partialFields) => {

  const pickedField = fields[Math.floor(Math.random() * fields.length)]['id'];
  const fieldsNew = fields.map((field) => {
    field.intervalBetweenWins++;
    if (field.id == pickedField) {
      field.ballOnField = true;
      field.numOfSets++;
      field.intervalBetweenSets = 0;
      if (field.Bid > 0) { field.numOfWins++; field.intervalBetweenWins = 0; }
    } else { field.ballOnField = false; field.intervalBetweenSets++; }
    return field;
  });

  const partialFieldsNew = partialFields.map((field) => {
    field.intervalBetweenWins++;
    field.intervalBetweenSets++;
    if (1 <= pickedField && pickedField <= 12 && field.winFields[0] <= pickedField && pickedField <= field.winFields[1]) {
      field.numOfSets++;
      field.intervalBetweenSets = 0;
      if (field.Bid > 0) { field.numOfWins++; field.intervalBetweenWins = 0; };
    }
    else if (13 <= pickedField && pickedField <= 24 && field.winFields[0] <= pickedField && pickedField <= field.winFields[1]) {
      field.numOfSets++;
      field.intervalBetweenSets = 0;
      if (field.Bid > 0) { field.numOfWins++; field.intervalBetweenWins = 0; };
    }
    else if (25 <= pickedField && pickedField <= 36 && field.winFields[0] <= pickedField && pickedField <= field.winFields[1]) {
      field.numOfSets++;
      field.intervalBetweenSets = 0;
      if (field.Bid > 0) { field.numOfWins++; field.intervalBetweenWins = 0; };
    }
    return field;
  });

  const colorFieldsNew = colorFields.map((field) => {
    field.intervalBetweenWins++;
    field.intervalBetweenSets++;
    if (fields[pickedField].color == field.color) {
      field.numOfSets++;
      field.intervalBetweenSets = 0;
      if (field.Bid > 0) { field.numOfWins++; field.intervalBetweenWins = 0; };
    };

    return field
  });

  return {
    type: "SET_BALL_ON_FIELD",
    fields: fieldsNew,
    partialFields: partialFieldsNew,
    colorFields: colorFieldsNew,
    currentWinner:pickedField,
  };
};
