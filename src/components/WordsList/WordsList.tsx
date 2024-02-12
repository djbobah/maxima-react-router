import * as React from "react";
import "./wordsList.scss";
import data from "../../data.json";

const WordsList = () => {
  // console.log(data);
  return (
    <div className="wrapper">
      {data.map((item, i) => {
        return (
          <div className="word" key={i}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default WordsList;
