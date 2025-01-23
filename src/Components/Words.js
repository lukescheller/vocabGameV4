import React, { useEffect } from "react";
//redux toolkit
import { useDispatch, useSelector } from "react-redux";
import { getDictionary } from "../ReduxSlices/Words_Slice";
import { removeWord } from "../ReduxSlices/Words_Slice";
//all words
import wordsV4 from "../WordsList/dictionary";
//helper functions
import scrambleWord from "../HelperFunctions/scrambleWord";
import shuffleArray from "../HelperFunctions/shuffleArray";
import defineWord from "../HelperFunctions/defineWord";
import throwMeAFricknBoneHere from "../HelperFunctions/throwMeAFricknBoneHere";
//stylez
import { stylezSheet, flexDiv } from "../stylez/stylezSheet";

const Words = () => {
  const dispatch = useDispatch();

  const dictionary = useSelector((state) => state.wordStore.dictionary);

  useEffect(() => {
    shuffleArray(wordsV4);
    wordsV4.forEach((w) => [dispatch(getDictionary(w))]);
  }, []);

  return (
    <div style={flexDiv}>
      {dictionary.map((w, index, key) => {
        return (
          <div key={index} style={stylezSheet}>
            <p>{scrambleWord(w[0].word)}</p>
            <button
              style={{ margin: "2.5px" }}
              word={w[0].word}
              onClick={(e) =>
                dispatch(removeWord(e.target.getAttribute("word")))
              }
            >
              remove
            </button>
            <button
              style={{ margin: "2.5px" }}
              onClick={() => {
                alert(defineWord(w[0]));
              }}
            >
              Definition
            </button>
            <button
              style={{ margin: "2.5px" }}
              onClick={() => {
                alert(throwMeAFricknBoneHere(w[0].word));
              }}
            >
              tip
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Words;
