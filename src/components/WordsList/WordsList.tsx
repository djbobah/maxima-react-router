import * as React from "react";
import "./wordsList.scss";
import data from "../../data.json";
import alpha from "../../alpha.json";
import AlphaItem from "../AlphaItem/AlphaItem.tsx";
import SelectedList from "../SelectedList/SelectedList.tsx";
import Word from "../Word/Word.tsx";

const WordsList: React.FC = () => {
  const [selectedAlpha, setSelectedAlpha] = React.useState("");
  // console.log(data);
  const handleClickAlpha = (symbol: string) => {
    if (selectedAlpha !== symbol) {
      setSelectedAlpha(symbol);
    } else {
      setSelectedAlpha("");
    }
  };
  return (
    <>
      <div className="alphaWrapper">
        {alpha.map((symbol, i) => {
          return (
            <AlphaItem
              key={i}
              symbol={symbol}
              isSelectAlpha={selectedAlpha === symbol}
              onClick={() => handleClickAlpha(symbol)}
            />
          );
        })}
      </div>
      {!selectedAlpha ? (
        <div className="wrapper">
          {data.map((item, i) => {
            return <Word key={i} item={item} />;
          })}
        </div>
      ) : (
        <SelectedList data={data} alpha={selectedAlpha} />
      )}
    </>
  );
};

export default WordsList;
