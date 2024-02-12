import * as React from "react";
import "./wordsList.scss";
import data from "../../data.json";
import { Link } from "react-router-dom";

const WordsList = () => {
  // console.log(data);
  return (
    <div className="wrapper">
      {data.map((item, i) => {
        return (
          <Link to={`/page/${item}`} key={i}>
            <div className="word">{item}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default WordsList;
