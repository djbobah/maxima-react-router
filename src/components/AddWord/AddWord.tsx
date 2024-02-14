import * as React from "react";
import "./addWord.scss";
import { useAppDispatch } from "../../hooks.ts";
import { addWord } from "../../store/Words.ts";

const AddWord = () => {
  const dispatch = useAppDispatch();

  const [addedWord, setAddWord] = React.useState("");
  const handleClickAddWord = () => {
    dispatch(addWord(addedWord));
    setAddWord("");
  };
  const handleChange = ({ target }) => {
    setAddWord(target.value);
  };
  return (
    <div className="addWordForm">
      <input
        className="addWordForm__input"
        type="text"
        id="addWord"
        name="addWord"
        placeholder="Введите слово для добавления"
        value={addedWord}
        onChange={handleChange}
      />
      <button onClick={handleClickAddWord} className="addWordForm__button">
        Добавить
      </button>
    </div>
  );
};

export default AddWord;
