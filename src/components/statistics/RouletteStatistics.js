import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import NumOfSets from "./NumOfSets";
import SpecialNumOfSets from "./SpecialNumOfSets";
import StartSimulationButton from "./StartSimulationButton";
const RouletteStatistics = (props) => {

  const numsOfSets = props.fieldList.map((field) => {
    return <NumOfSets key={field.id} field={field} />
  })

  const numsOfColors = props.colorFields.map((field) => {
    return <SpecialNumOfSets key={field.id} field={field} />
  })

  const numsOfPartials = props.partialFields.map((field) => {
    return <SpecialNumOfSets key={field.id} field={field} />
  })

  return (
    <div className="conteiner-fluid">
      <div className="row">
        <div className="col-md-6 text-center" >
          {numsOfColors}
          {numsOfPartials}
          <StartSimulationButton />
        </div>
        <div className="col-md-6 text-center" >
          {numsOfSets}

        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownState) => {
  return {
    fieldList: state.fields,
    colorFields: state.colorFields,
    partialFields: state.partialFields
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    throwBall: (fields) => { dispatch(fields) }
  }
}

export default connect(mapStateToProps, {})(RouletteStatistics);
