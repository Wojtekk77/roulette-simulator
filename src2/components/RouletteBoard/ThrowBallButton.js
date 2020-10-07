const ThrowBallButton = () => {
  const fieldList = this.state.fields;
  const pickedField = fieldList[Math.floor(Math.random() * fieldList.length)];
  // console.log(pickedField.color + pickedField.id);
  const fields = this.state.fields.map((field) => {
    if (field.id === pickedField.id) {
      field.ballOnField = true;
    } else {
      field.ballOnField = false;
    }
    return field;
  });
  this.setState({
    fields,
  });
  const pickedField = () => {
    fieldList[Math.floor(Math.random() * fieldList.length)];
  };
  const throwBall = () => {};

  return <button onClick={() => throwBall()}> </button>;
};

export default ThrowBallButton;
