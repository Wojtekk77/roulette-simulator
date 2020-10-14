import React, { useState, useEffect } from "react";
import FieldOnBoard from "./FieldOnBoard.js";
import "../../styles/RouletteBoard.css";
import { setBetAction } from "../../actions/setBetAction";
import { connect } from "react-redux";
import ClearFieldButton from "./ClearFieldButton";
import ThrowBallButton from "./ThrowBallButton";
import RouletteStatistics from "../statistics/RouletteStatistics.js";
const RouletteBoard = (props) => {
 
  const handleClickField = (id) => {
    props.setBetOnField(props.fields,id);
  };
  const fields = props.fields.map((field) => (
    <FieldOnBoard
      key={field.id}
      number={field.id}
      color={field.color}
      click={() => handleClickField(field.id)}
      isBet={field.Bid > 0}
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
            <div className="board"><ThrowBallButton/></div>
          </div>
          <div className="col-md-4">
            <div className="board"><RouletteStatistics/></div>
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
     setBetOnField: (fields,id) => dispatch(setBetAction(fields,id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouletteBoard);
// mapStateToProps pozwala nam połączyć się ze storem i przekazać to od razu do propsów
