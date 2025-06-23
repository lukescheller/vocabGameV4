import React, { useEffect, useState } from "react";
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
import firstLast from "../HelperFunctions/firstLast";
import firstClue from "../HelperFunctions/firstClue";
//stylez
import { stylezSheet, flexDiv } from "../stylez/stylezSheet";
import { Button, Card } from "react-bootstrap";

const Words = () => {
  //display state
  const [display, setDisplay] = useState({
    //block or none
    easy: true,
    medium: true,
    difficult: true,
  });

  //easy
  let easy = () => {
    setDisplay({
      ...display,
      easy: true,
      medium: true,
      difficult: true,
    });
  };
  //medium
  let medium = () => {
    setDisplay({
      ...display,
      easy: false,
      medium: false,
      difficult: true,
    });
  };
  //difficult
  let difficult = () => {
    setDisplay({
      ...display,
      easy: false,
      medium: false,
      difficult: false,
    });
  };
  //useDispatch
  const dispatch = useDispatch();

  //select from state
  const dictionary = useSelector((state) => state.wordStore.dictionary);

  //get words - useEffect
  useEffect(() => {
    shuffleArray(wordsV4);
    wordsV4.forEach((w) => [dispatch(getDictionary(w))]);
  }, []);

  //content
  return (
    <div>
      <div style={{ margin: "5px", display: "flex", justifyContent: "center" }}>
        <Button style={{ margin: "5px" }} onClick={easy}>
          Easy
        </Button>
        <Button style={{ margin: "5px" }} onClick={medium}>
          Medium
        </Button>
        <Button style={{ margin: "5px" }} onClick={difficult}>
          Difficult
        </Button>
      </div>
      <div style={flexDiv}>
        {dictionary.map((w, index, key) => {
          return (
            <Card style={stylezSheet} key={index}>
              <Card.Body>
                <h4>{index + 1}</h4>
                {/*first letter and last letter display*/}
                {display.easy ? <div>{firstLast(w[0].word)}</div> : ""}
                <Card.Title>{scrambleWord(w[0].word)}</Card.Title>
                {display.difficult ? (
                  <div id="buttons">
                    <Button
                      variant="success"
                      style={{ margin: "2px" }}
                      onClick={() => {
                        alert(defineWord(w[0]));
                      }}
                    >
                      Definition
                    </Button>
                    <Button
                      variant="primary"
                      style={{ margin: "2px" }}
                      onClick={() => {
                        alert(throwMeAFricknBoneHere(w[0]));
                      }}
                    >
                      Tip
                    </Button>
                    <Button
                      variant="danger"
                      style={{ margin: "2.5px" }}
                      word={w[0].word}
                      onClick={(e) =>
                        dispatch(removeWord(e.target.getAttribute("word")))
                      }
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  ""
                )}
                {display.medium ? (
                  <div style={{ margin: "5px", fontStyle: "italic" }}>
                    {/* {firstClue(w[0])} */}
                    {/* n/a too easy */}
                  </div>
                ) : (
                  ""
                )}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Words;
