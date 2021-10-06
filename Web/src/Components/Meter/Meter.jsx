import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import "./meter.css"

function Meter() {
    return (
        <div className="meter-container">
            <h1>Meter</h1>
            <br/>
            
            
            <ReactSpeedometer
  value={600}
  segments={3}
  segmentColors={[
    "rgb(9,235,129)",
    "rgb(195, 232, 30)",
    "rgb(245,72,15)",
  ]}
/>
        </div>
    )
}

export default Meter