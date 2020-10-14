export const throwBallAction = (fields) => {
  
  const pickedField = fields[Math.floor(Math.random() * fields.length)]['id'];
  const fieldsNew = fields.map((field) => {
    if (field.id == pickedField) {
      field.ballOnField = true;
      field.numOfSets++;
    }else{field.ballOnField = false;}
    return field;
  });

  return {
    type: "SET_BALL_ON_FIELD",
    fields: fieldsNew,
  };
};
