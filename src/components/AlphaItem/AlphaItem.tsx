import * as React from "react";

type AlphaItemType = {
  symbol: string;
  isSelectAlpha: boolean;
  onClick: React.MouseEvent<HTMLDivElement> | any;
};

const AlphaItem: React.FC<AlphaItemType> = ({
  symbol,
  isSelectAlpha,
  onClick,
}) => {
  // const [isSelectAlpha, setIsSelectAlpha] = React.useState(false);
  return (
    <div
      className={`alpha ${isSelectAlpha ? "selected" : ""} `}
      onClick={onClick}
    >
      {symbol.toLocaleUpperCase()}
    </div>
  );
};

export default AlphaItem;
