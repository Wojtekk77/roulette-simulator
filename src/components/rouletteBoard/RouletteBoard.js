import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FieldOnBoard from "./FieldOnBoard.js";
const RouletteBoard = () => {
  const store = useSelector((state) => state);
  const fields = store.fields.map((field) => (
    <FieldOnBoard
      key={field.id}
      number={field.id}
      color={field.color}
      click={() => this.handleClickField(field.id, field.color, field.isBet)}
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

export default RouletteBoard;
