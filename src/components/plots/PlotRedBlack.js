import React, { Component, highlightPoint } from "react";
import { connect } from "react-redux";
import {
  XYPlot,
  LineSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
  MarkSeries,
  VerticalBarSeries,
  Highlight,
  ContourSeries,
  MarkSeriesCanvas,
  Borders,
} from "react-vis";

const PlotRedBlack = (props) => {
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];

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
  var myData = getData(props.lstOfSets);
  return (
    <>
      {/* <XYPlot height={300} width={900}>
        <VerticalBarSeries data={myData} />
      </XYPlot>
      <XYPlot height={300} width={900}>
        <LineSeries data={myData} />
      </XYPlot>
      <XYPlot height={300} width={900}>
        <MarkSeries data={myData} />
      </XYPlot> */}
      <XYPlot
        xDomain={[0, 100]}
        yDomain={[0, 36]}
        width={900}
        // getX={(d) => d.waiting}
        // getY={(d) => d.eruptions}
        data={myData}
        height={300}
      >
        <ContourSeries
          animation
          className="contour-series-example"
          style={{
            stroke: "#125C77",
            strokeLinejoin: "round",
            position: "absolute",
            top: 0,
          }}
          colorRange={["#79C7E3", "#FF9833"]}
          data={myData}
        />
        <MarkSeriesCanvas animation data={myData} size={3} color={"#125C77"} />
        <Borders style={{ all: { fill: "#777" } }} />
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
