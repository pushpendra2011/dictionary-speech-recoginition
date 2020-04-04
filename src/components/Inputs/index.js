import React, { useState, useEffect } from "react";
import { Input } from "antd";
import Search from "antd/lib/input/Search";
import { wordRef, meaningRef } from "../../firebase";
import Speech from "./Speech";
import "../../index.css";
export default () => {
  useEffect(() => {}, []);

  const [searchWord, setsearchWord] = useState("");
  const [error, setError] = useState("");

  const onSearch = async (word) => {
    const app_key = "9d6bcf42fb66b5635146b8380d49e5ee";
    const app_id = "cefc7b32";
    console.log("Word", word);
    const result = await fetch(
      `http://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${word}`,
      {
        headers: {
          app_id,
          app_key,
        },
      }
    );
    const data = await result.json();

    if (data.error) {
      setError(data.error);
      return;
    }

    wordRef.set(word);
    let meaning =
      data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
    // console.log("Meaning", meaning);
    meaningRef.set(meaning);
    setError("");
  };

  const findWordFromSpeech = (word) => {
    setsearchWord(word);
  };
  return (
    <div>
      {error}

      <div className="form">
        <div className="input">
          <Search
            value={searchWord}
            onChange={(event) => setsearchWord(event.target.value)}
            placeholder="input search text"
            onSearch={(value) => {
              onSearch(value);
            }}
            enterButton
          />
        </div>
        <div className="speech">
          <Speech findWordFromSpeech={findWordFromSpeech}></Speech>
        </div>
      </div>
    </div>
  );
};
