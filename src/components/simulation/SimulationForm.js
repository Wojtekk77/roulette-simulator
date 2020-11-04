import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeNumberOfSimulations } from "../../actions/SimulationFormActions"

const SimulationForm = (props) => {

    const handleChangeForm = (e) => {
        console.log(e.target.value)
        props.changeNumberOfSimulations(e.target.value);
    }
        
        return (
          <>
            <form>
              <label htmlFor="speed">
                your name
                <input
                  type="number"
                  id="speed"
                  name="speed"
                  onChange={handleChangeForm}
                  value={props.numOfSimulations}
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
        // toggleSimualtion: (isActive) => dispatch(toggleSimulationAction(isActive))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimulationForm)


