import * as React from "react";

import { Link } from "react-router-dom";

type WordType = {
  item: string;
};

const Word: React.FC<WordType> = ({ item }) => {
  return (
    <Link to={`/page/${item}`} className="link">
      <div className="word">{item}</div>
    </Link>
  );
};

export default Word;
