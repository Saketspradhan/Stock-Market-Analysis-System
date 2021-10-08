import React, { useState } from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import "./meter.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {styled} from '@mui/material/styles';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import {Link} from "react-router-dom";
const companies = [
  {
    value: 600,
    label: 'TATA STEEL',
  },
  {
    value: 75,
    label: 'ONGC',
  },
  {
    value: 900,
    label: 'RIL',
  },
  {
    value: 300,
    label: 'Apollo',
  },
];

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'rgb(144,202,249)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'rgb(144,202,249)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(207, 207, 207,0.8)',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgb(144,202,249)',
    },
  },
});

function Meter() {
  const [comval, setComval] = useState(500);

  const handleChange = (event) => {
    setComval(event.target.value);
  };

    return (
        <div className="meter-container">
            <h1 id="meter-title" >Risk Factor Meter</h1>
            <Box className="meter-box"
      component="form"
      noValidate
      autoComplete="off">
        <h5>Select a Company</h5>
        <br/>
        <div>
        <CssTextField
      InputProps={{
          style: {
              color: "red"
          }
      }}
          id="company-select"
          select
          value={comval}
          onChange={handleChange}
          size="large"
        >
          {companies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </CssTextField>
        </div>
        </Box>
            <br/>
            <ReactSpeedometer
            width={500}
            value={comval}
            currentValueText={'Risk Factor'}
            segments={3}
            segmentColors={[
            "rgb(9,235,129)",
            "rgb(195, 232, 30)",
            "rgb(245,72,15)",
            ]}

  customSegmentLabels={[
    {
      text: 'Buy',
      position: 'OUTSIDE',
      color:'azure',
    },
    {
      text: 'Sell',
      position: 'OUTSIDE',
      color:'azure'
    },
    {
      text: '',
      position: 'INSIDE',
    },
  ]}
/>
        <br/>
        <br/>
            <Link to="/">
            <AwesomeButton
                type="secondary"
                size="large"
                ripple
                className="aws-btn"
            >
            Home
            </AwesomeButton>
            </Link>
        </div>
    )
}

export default Meter