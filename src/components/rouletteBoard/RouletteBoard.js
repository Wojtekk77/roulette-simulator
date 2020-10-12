import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FieldOnBoard from "./FieldOnBoard.js";
import "../../styles/RouletteBoard.css";
import { setBetAction } from "../../actions/setBetAction";
import { connect } from "react-redux";
import ClearFieldButton from "./ClearFieldButton"
const RouletteBoard = (props) => {
  const store = useSelector((state) => state);

  const handleClickField = (id) => {
    const fields = store.fields.map((field) => {
      if (field.id == id) {
        field.Bid = (field.Bid + 1) % 5;
      }
      return field;
    });
    props.setBetOnField(fields)
  };
  const fields = props.fields.map((field) => (
    <FieldOnBoard
      key={field.id}
      number={field.id}
      color={field.color}
      click={() => handleClickField(field.id)}
      isBet={field.Bid > 0}
>>>>>>> b4667eee4dd8d9dcdf4760bd3b3823ea0b4c930e
      ballOnField={field.ballOnField}
      Bid={field.Bid}
    />
  ));

  return (
    <>
      <div className="container-fluid">
        <div className="row align-item-center">
          <div className="col-md-4">
            <div className="board">{fields}</div>
          </div>
          <div className="col-md-4">
            <div className="board"><ClearFieldButton/></div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  fields: state.fields,
});

const mapDispatchToProps = (dispatch) => {
  return {
<<<<<<< HEAD
    setBetOnField : (fields) => dispatch(setBetAction(fields)),
=======
     setBetOnField: (fields) => dispatch(setBetAction(fields)),
>>>>>>> b4667eee4dd8d9dcdf4760bd3b3823ea0b4c930e
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouletteBoard);
// mapStateToProps pozwala nam połączyć się ze storem i przekazać to od razu do propsów
