import React from "react";
import { useParams } from "react-router-dom";
import "./wordPage.scss";

const WordPage = () => {
  const { word } = useParams();
  return <div>{word}</div>;
};

export default WordPage;
