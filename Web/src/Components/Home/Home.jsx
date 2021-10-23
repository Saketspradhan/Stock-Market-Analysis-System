import React from "react";
import { AwesomeButton } from "react-awesome-button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "react-awesome-button/dist/styles.css";
import "./home.css";
import mid from "./mid.png";

function Home() {
  return (
    <div className="home-container">
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h1 id="home-title">Risk Based Approach for Financial Markets</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <img src={mid} alt="mid" id="mid" />
        <br />
        <br />
        <Link to="/risk">
          <AwesomeButton
            type="secondary"
            size="large"
            ripple
            className="aws-btn"
          >
            Get Risk Factor !
          </AwesomeButton>
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
