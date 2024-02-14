import * as React from "react";
import "./wordsList.scss";
// import data from "../../data.json";
// import { useSelector } from "react-redux";
import alpha from "../../alpha.json";
import AlphaItem from "../AlphaItem/AlphaItem.tsx";
import SelectedList from "../SelectedList/SelectedList.tsx";
import WordWraper from "../WordWraper/WordWraper.tsx";
import { useAppSelector } from "../../hooks.ts";
import AddWord from "../AddWord/AddWord.tsx";

const WordsList: React.FC = () => {
  const [selectedAlpha, setSelectedAlpha] = React.useState("");
  // console.log(data);
  const data = useAppSelector((state) => state.words.words);

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
        <WordWraper data={data} />
      ) : (
        <SelectedList data={data} alpha={selectedAlpha} />
      )}
      <AddWord />
    </>
  );
};

export default WordsList;
