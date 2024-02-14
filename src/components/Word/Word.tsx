import * as React from "react";
import "./Word.scss";

import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks.ts";
import { deleteWord, editWord } from "../../store/Words.ts";

type WordType = {
  item: string;
};

const Word: React.FC<WordType> = ({ item }) => {
  const [isEditWord, setIsEditWord] = React.useState(false);
  const [editInput, setInput] = React.useState("");
  const [saveWord, setSaveWord] = React.useState("");

  const dispatch = useAppDispatch();

  const handleClickEdit = (word: string) => {
    setIsEditWord((prev) => !prev);
    setInput(word);
    setSaveWord(word);
  };
  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const handleClickDelete = (word: string) => {
    dispatch(deleteWord(word));
  };
  const handleClickSave = (word: string, newWord: string) => {
    dispatch(editWord({ word, newWord }));
    setIsEditWord((prev) => !prev);
    setInput("");
    setSaveWord("");
  };

  return (
    <div className="word__container">
      {!isEditWord ? (
        <>
          <Link to={`/page/${item}`} className="link">
            <div className="word">{item}</div>
          </Link>
          <div className="word__container_buttons">
            <button
              onClick={() => handleClickEdit(item)}
              className="button edit"
              title="Изменить"
            >
              <i className="bi bi-pencil-fill"></i>
            </button>
            <button
              className="button del"
              title="Удалить"
              onClick={() => handleClickDelete(item)}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            className="wordInput"
            type="text"
            value={editInput}
            onChange={handleChange}
          />
          <div className="word__container_buttons">
            <button
              className="button save"
              title="Сохранить"
              onClick={() => handleClickSave(saveWord, editInput)}
            >
              <i className="bi bi-floppy"></i>
            </button>
            <button
              onClick={() => handleClickEdit("")}
              className="button cancel"
              title="Отменить"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Word;
