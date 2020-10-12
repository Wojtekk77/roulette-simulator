export const throwBallAction = (fields) => {
  return {
    type: "SET_ALL_ON_FIELD",
    fields: fields,
  };
};
