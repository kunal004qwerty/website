import React from "react";
import "./App.scss";
import Section from "./Pages/Section";
import { Data } from "./Pages/Data";
import SecondSec from "./Pages/SecondSec";

const App = () => {
  return (
    <div>
      <Section slides={Data} />
      <SecondSec />
    </div>
  );
};

export default App;
