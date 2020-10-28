import React, { Component } from 'react'
import { connect } from 'react-redux'
import SetBetAlgorithm01 from './SetBetAlgorithm01'
import StartSimulationButton from "./StartSimulationButton"

export const ButtonsSimulation = () => {
    return (
        <div>
            <StartSimulationButton/>
            <SetBetAlgorithm01/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsSimulation)
