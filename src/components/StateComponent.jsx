import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const StateComponent = () => {
  const { states } = useSelector((state) => state.data.data);
  const [stateInput, setStateInput] = useState("");

  const filteredState =
    stateInput === ""
      ? states
      : states.filter((data) => data.state === stateInput);

  return (
    <div>
      <select
        name="states"
        id="states"
        value={stateInput}
        onChange={(e) => setStateInput(e.target.value)}
      >
        <option value="" default>
          All States
        </option>
        {states.map(({ state }) => (
          <option value={state} key={state}>
            {state}
          </option>
        ))}
      </select>
      <div>
        {filteredState.map((data) => (
          <div key={data.id}>
            <p>{data.state}</p>
            <p>
              Confirmed Cases: <span>{data.confirmedCases}</span>
            </p>
            <p>
              Cases on admission: <span>{data.casesOnAdmission}</span>
            </p>
            <p>
              Discharged Cases: <span>{data.discharged}</span>
            </p>
            <p>
              Death: <span>{data.death}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateComponent;
