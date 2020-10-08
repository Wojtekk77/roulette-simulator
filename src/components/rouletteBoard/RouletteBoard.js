import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FieldOnBoard from "./FieldOnBoard.js";
import "../../styles/RouletteBoard.css";
import { setBetAction } from "../../actions/setBetAction";
import { connect } from "react-redux";
const RouletteBoard = (props) => {
  const store = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleClickField = (id, color, isBet) => {
    const fields = store.fields.map((field) => {
      if (field.id == id) {
        field.isBet = !isBet;
      }
      return field;
    });
    dispatch(setBetAction(fields));
  };

  const fields = props.fields.map((field) => (
    <FieldOnBoard
      key={field.id}
      number={field.id}
      color={field.color}
      click={() => handleClickField(field.id, field.color, field.isBet)}
      isBet={field.isBet}
      ballOnField={field.ballOnField}
    />
  ));

  return (
    <>
      <div className="container-fluid">
        <div className="row align-item-center">
          <div className="col-md-4">
            <div className="board">{fields}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  fields: state.fields,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching actions returned by action creators
    // increment: () => dispatch(increment()),
    // decrement: () => dispatch(decrement()),
    // reset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, {})(RouletteBoard);
// mapStateToProps pozwala nam połączyć się ze storem i przekazać to od razu do propsów
