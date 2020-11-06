import React, { Component } from 'react';
import { connect } from 'react-redux';
import {XYPlot, LineSeries, HorizontalGridLines,VerticalGridLines, XAxis, YAxis} from 'react-vis';

const PlotRedBlack = (props) => {

  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];

  //change array to json object
  // const getData = (lstOfData) => {
  //   return lstOfData.reduce((json, value, key) => { json[key] = value; return json; }, {});;
  // }
  var listOfObjects = [];
  var getData = (lstOfSets) => {
    var i = 0;
    lstOfSets.forEach((element) => {
      listOfObjects.push( {'x':i,'y':element} )
      i++;  
    })
    return listOfObjects;
  }
  console.log(listOfObjects);
  var myData = getData(props.lstOfSets);
    return (
      <>
        <XYPlot height={1000} width={1300}>
          <LineSeries data={myData} />
        </XYPlot>
      </>
      );
}


const mapStateToProps = (state, ownState) => ({
  fields: state.roulette.fields,
  lstOfSets: state.simulation.lstOfSets,
})

const mapDispatchToProps = (dispatch) => {
  return {
    throwBall: (fields) => { dispatch(fields) }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(PlotRedBlack)