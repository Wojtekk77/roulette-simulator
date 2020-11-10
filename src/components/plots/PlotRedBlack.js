import React, { Component, highlightPoint } from "react";
import { connect } from "react-redux";
import {
  XYPlot,
  XAxis,
  YAxis,
  ContourSeries,
  MarkSeriesCanvas,
  Borders,
} from "react-vis";
import "../../styles/PlotRedBlack.css";

const PlotRedBlack = (props) => {
  //change array to json object
  // const getData = (lstOfData) => {
  //   return lstOfData.reduce((json, value, key) => { json[key] = value; return json; }, {});;
  // }
  var listOfObjects = [];
  var getData = (lstOfSets) => {
    var i = 0;
    lstOfSets.forEach((element) => {
      listOfObjects.push({ x: i, y: element });
      i++;
    });
    return listOfObjects;
  };
  console.log(listOfObjects);
  var data = getData(props.lstOfSets);
  return (
    <>
      <XYPlot
        xDomain={[0, 100]}
        yDomain={[0, 36]}
        data={data}
        className="relative-plot"
        height={200}
        width={1200}
      >
        <ContourSeries
          animation
          style={{
            stroke: "#125C77",
            strokeLinejoin: "round",
          }}
          colorRange={["#79C7E3", "#FF9833"]}
          data={data}
        />
        <MarkSeriesCanvas
          className="absolute-plot"
          animation
          data={data}
          size={3}
          color={"#125C77"}
        />
        <Borders style={{ all: { fill: "#fff" } }} />
        <XAxis />
        <YAxis />
      </XYPlot>
    </>
  );
};

const mapStateToProps = (state, ownState) => ({
  fields: state.roulette.fields,
  lstOfSets: state.simulation.lstOfSets,
  numOfSimulations: state.simulation.numOfSimulations,
});

const mapDispatchToProps = (dispatch) => {
  return {
    throwBall: (fields) => {
      dispatch(fields);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlotRedBlack);
