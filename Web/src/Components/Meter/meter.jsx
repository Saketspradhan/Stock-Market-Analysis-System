import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"

function meter() {
    return (
        <div className="meter-container">
            <h1>Meter</h1>
            <br/>
            <ReactSpeedometer
  value={333}
  segments={5}
  segmentColors={[
    "#bf616a",
    "#d08770",
    "#ebcb8b",
    "#a3be8c",
    "#b48ead",
  ]}
  // startColor will be ignored
  // endColor will be ignored
/>
        </div>
    )
}

export default meter