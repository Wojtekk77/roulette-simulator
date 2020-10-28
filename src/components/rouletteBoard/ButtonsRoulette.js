import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ClearFieldButton from "./ClearFieldButton";
import ThrowBallButton from "./ThrowBallButton";
import ClearStatsButton from "../statistics/ClearStatsButton.js";
import ClearSpecialBets from "./sideFields/ClearSpecialBets";
import { ButtonsSimulation } from "../simulation/ButtonsSimulation";

export const ButtonsRoulette = () => {
    return (
        <div>
            <div className="board"><ClearFieldButton /></div>
            <div className="board"><ThrowBallButton /></div>
            <div className="board"><ClearStatsButton /></div>
            <div className="board"><ClearSpecialBets /></div>
            <div className="board"><ButtonsSimulation/></div>
        </div>
    )
}



const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsRoulette)
