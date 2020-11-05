import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeNumberOfSimulations, changeSpeedOfSimulations } from "../../actions/SimulationFormActions"

const SimulationForm = (props) => {

    const handleChangeNumOfSimulations = (e) => {
        console.log(e.target.value)
        props.changeNumberOfSimulations(e.target.value);
    }
    const handleChangeSpeedOfSimulations = (e) => {
      console.log(e.target.value)
      props.changeSpeedOfSimulations(e.target.value);
  }
        
        return (
          <>
            <form>
              <label htmlFor="numberOfSimulations">
                number of simulations
                <input
                  type="number"
                  id="numberOfSimulations"
                  name="numberOfSimulations"
                  onChange={handleChangeNumOfSimulations}
                  value={props.numOfSimulations}
                  step="10"
                />
              </label>
              <label htmlFor="speed">
                speed in ms
                <input
                  type="number"
                  id="speed"
                  name="speed"
                  onChange={handleChangeSpeedOfSimulations}
                  value={props.speedOfSimulationInMs}
                  step="100"
                />
              </label>
            </form>
          </>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfSimulations: state.simulation.numOfSimulations,
        speedOfSimulationInMs: state.simulation.speedOfSimulationInMs,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeNumberOfSimulations: (numOfSimulations) => dispatch(changeNumberOfSimulations(numOfSimulations)),
        changeSpeedOfSimulations: (numOfSimulations) => dispatch(changeSpeedOfSimulations(numOfSimulations)),
        // toggleSimualtion: (isActive) => dispatch(toggleSimulationAction(isActive))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimulationForm)


