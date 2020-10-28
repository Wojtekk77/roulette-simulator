export const setBetAction = (fields, id) => {
  const fieldsNew = fields.map((field) => {
    if (field.id == id) {
      field.Bid = (field.Bid + 1) % 2;
    }
    return field;
  });
  return {
    type: "SET_BET",
    fields: fieldsNew,
  };
};

export const setBetColorAction = (fields, id) => {
  const fieldsNew = fields.map((field) => {
    if (field.id == id) {
      field.Bid = (field.Bid + 1) % 2;
    }
    return field;
  });
  return {
    type: "SET_BET_COLOR",
    fields: fieldsNew,
  };
};

export const setBetPartialAction = (fields, id) => {
  const fieldsNew = fields.map((field) => {
    if (field.id == id) {
      field.Bid = (field.Bid + 1) % 2;
    }
    return field;
  });
  return {
    type: "SET_BET_PARTIAL",
    fields: fieldsNew,
  };
};