import React, { useState, useEffect } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import "./meter.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Link } from "react-router-dom";
import axios from "axios";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "rgb(144,202,249)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgb(144,202,249)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(207, 207, 207,0.8)",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(144,202,249)",
    },
  },
});



function Meter() {
  const [comval, setComval] = useState(500);

  

  const [companies, setCompanies] = useState([]);
  const [test, setTest] = useState("");
  const [serial, setSerial] = useState(0);
  const [result, setResult] = useState(0);
  const [cmp, setCmp] = useState(0);
  const [formula, setFormula] = useState(0);
  

  const getData=()=>{
    fetch('companies.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        
        return response.json();
      })
      .then(function(myJson) {
        
        setCompanies(myJson);
      });
  }

 


  useEffect(()=>{
    getData()
   
    
  },[])

  
  
  const handleChange =  (event)  => {
    setTest(event.target.value);
    for(let i = 0; i < companies.length; i++)
    {
      if (companies[i].Value === event.target.value)
      {
        setSerial(companies[i].Index);
        setCmp(companies[i].real);
        setFormula(((result-cmp)/cmp)*100);
      }
    }

    
    
    

    
        //.then(response =>setResult(output.data));
        
       
  };

  useEffect(async ()=>{
    const output =await axios.post('/predict', {
      Index: serial,
      Value: test,
    })
    
    setResult(output.data);
  },[handleChange]);
  
  console.log(result);
  console.log(cmp);

  
  
  return (
    <div className="meter-container">
      <h1 id="meter-title">Risk Factor Meter</h1>
      <Box className="meter-box" component="form" noValidate autoComplete="off">
        <h5>Select a Company</h5>
        <br />
        <div>
          <CssTextField
            InputProps={{
              style: {
                color: "red",
              },
            }}
            id="company-select"
            select
            value={test}
            onChange={handleChange}
            size="large"
          >
            {companies.map((option) => (
              <MenuItem key={option.Index} value={option.Value}>
                {option.Label}
              </MenuItem>
            ))}
          </CssTextField>
        </div>
      </Box>
      <br />
      <ReactSpeedometer
        width={500}
        minValue={-100}
        maxValue={100}
        value={formula}
        currentValueText={"Risk Factor"}
        segments={3}
        segmentColors={[
          "rgb(9,235,129)",
          "rgb(195, 232, 30)",
          "rgb(245,72,15)",
        ]}
        customSegmentLabels={[
          {
            text: "Buy",
            position: "OUTSIDE",
            color: "azure",
          },
          {
            text: "Neutral",
            position: "OUTSIDE",
            color: "azure",
          },
          {
            text: "Sell",
            position: "OUTSIDE",
            color: "azure",
          },
        ]}
      />
      <br />
      <br />
      <Link to="/">
        <AwesomeButton type="secondary" size="large" ripple className="aws-btn">
          Home
        </AwesomeButton>
      </Link>
    </div>
  );
}

export default Meter;
