import { useEffect, useState } from "react";
import "./Output.css";

const Output = ({ params }) => {
  const [outputState, setOutputState] = useState();
  useEffect(() => {
    setOutputState(params);
  }, [params]);
  const displayInput = () => {
    let labels = Object.keys(outputState || {});
    let display =
      labels &&
      labels.map((item, index) => {
        return (
          <p key={index}>
            {item} : <b> {outputState[`${item}`]} </b>
          </p>
        );
      });
    return display;
  };
  const calculateResult = () => {
    // debugger;
    const perPlateRate = 20;
    let listOfplate = [];
    let keys = Object.keys(outputState || {});
    keys.forEach((value) => {
      if (value.includes("-")) {
        listOfplate.push(value);
      }
    });
    let sum = 0;
    for (let i = 0; i < listOfplate.length; i++) {
      if (Object.keys(outputState || []).includes(listOfplate[i])) {
        sum = sum + Number(outputState[listOfplate[i]]);
      }
    }
    // debugger;
    // let percent =
    //   ((sum * perPlateRate) / Number(outputState["income"] || 0)) *
    //   (100).toFixed(2);
    return (
      <div>
        {sum === 0 ? null : (
          <b>
            Toal Rate: {sum * perPlateRate} <br /> {" "}
          </b>
        )}
      </div>
    );
  };
  return (
    <div className="output-container">
      <div className="output-area">{displayInput()}</div>
      <div className="total-div">{calculateResult()}</div>
    </div>
  );
};

export default Output;
