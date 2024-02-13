import * as React from "react";
import "./SelectedList.scss";
import Word from "../Word/Word.tsx";

type SelectedListType = {
  data: string[];
  alpha: string;
};

const SelectedList: React.FC<SelectedListType> = ({ data, alpha }) => {
  const filteredFirstAlpha = data.filter(
    (item) => item.charAt(0).toLocaleLowerCase() === alpha.toLocaleLowerCase()
  );

  const filteredAnyAlpha = data.filter((item) => item.indexOf(alpha) >= 0);
  return (
    <div className="selectedListWrapper">
      <div className="filterList">
        <h3 className="title">Отфильтровано по первой букве "{alpha}"</h3>
        <hr />
        <div>
          {filteredFirstAlpha.length > 0
            ? filteredFirstAlpha.map((item, i) => <Word key={i} item={item} />)
            : "нет совпадений"}
        </div>
      </div>
      <div className="filterList">
        <h3 className="title">
          Отфильтровано по наличию буквы "{alpha}" в слове
        </h3>
        <hr />
        <div>
          {filteredFirstAlpha.length > 0
            ? filteredAnyAlpha.map((item) => <div>{item}</div>)
            : "нет совпадений"}
        </div>
      </div>
    </div>
  );
};

export default SelectedList;
