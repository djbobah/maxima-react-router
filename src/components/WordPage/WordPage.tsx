import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./wordPage.scss";

const WordPage: React.FC = () => {
  const navigate = useNavigate();
  const { word } = useParams();

  return (
    <div className="wordWrapper">
      <button className="btn-back" onClick={() => navigate("/")}>
        Назад
      </button>
      <h1 className="wordPage">{word}</h1>
    </div>
  );
};

export default WordPage;
