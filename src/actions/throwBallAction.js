export const throwBallAction = (fields, colorFields, partialFields) => {

  const pickedField = fields[Math.floor(Math.random() * fields.length)]['id'];
  const fieldsNew = fields.map((field) => {
    if (field.id == pickedField) {
      field.ballOnField = true;
      field.numOfSets++;
      if (field.Bid > 0) { field.numOfWins++ };
    } else { field.ballOnField = false; }
    return field;
  });

  const partialFieldsNew = partialFields.map((field) => {
    if (1 <= pickedField && pickedField <= 12 && field.winFields[0] <= pickedField && pickedField <= field.winFields[1]) {
      field.numOfSets++;
      if (field.Bid > 0) { field.numOfWins++ };
    }
    else if (13 <= pickedField && pickedField <= 24 && field.winFields[0] <= pickedField && pickedField <= field.winFields[1]) {
      field.numOfSets++;
      if (field.Bid > 0) { field.numOfWins++ };
    }
    else if (25 <= pickedField && pickedField <= 36 && field.winFields[0] <= pickedField && pickedField <= field.winFields[1]) {
      field.numOfSets++;
      if (field.Bid > 0) { field.numOfWins++ };
    }
    return field;
  });

  const colorFieldsNew = colorFields.map((field) => {
    if (fields[pickedField].color == field.color) {
      field.numOfSets++;
      if (field.Bid > 0) { field.numOfWins++ };
    };

    return field
  });

  return {
    type: "SET_BALL_ON_FIELD",
    fields: fieldsNew,
    partialFields: partialFieldsNew,
    colorFields: colorFieldsNew,
  };
};
