import React from "react";
import Word from "../components/Word/Word.tsx";

type WordWraperType = {
  data: string[];
};

const WordWraper: React.FC<WordWraperType> = ({ data }) => {
  return (
    <div className="wrapper">
      {data.map((item, i) => {
        return <Word key={i} item={item} />;
      })}
    </div>
  );
};

export default WordWraper;
