import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDictionary } from "../ReduxSlices/Words_Slice";
import { removeWord } from "../ReduxSlices/Words_Slice";
import wordsV4 from "../WordsList/dictionary";

const Words = () => {
  const dispatch = useDispatch();

  const dictionary = useSelector((state) => state.wordStore.dictionary);
  console.log(dictionary);

  useEffect(() => {
    wordsV4.forEach((w) => [dispatch(getDictionary(w))]);
  }, []);

  return (
    <div>
      {dictionary.map((w) => {
        return (
          <div>
            <p>{w[0].word}</p>
            <button
              word={w[0].word}
              onClick={(e) =>
                dispatch(removeWord(e.target.getAttribute("word")))
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Words;
