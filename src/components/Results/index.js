import React, { useEffect, useState } from "react";
import { wordRef, meaningRef } from "../../firebase";

import { Card } from "antd";
import "../../index.css";

export default () => {
  const [meaning, setMeaning] = useState("");
  const [word, setWord] = useState("");

  useEffect(() => {
    setWord("");
    setWord("");

    wordRef.on("value", (snap) => {
      console.log(snap.val());
      setWord(snap.val());
    });
    meaningRef.on("value", (snap) => {
      console.log(snap.val());
      setMeaning(snap.val());
    });
  }, []);
  return (
    <div className="search-results">
      <div className="card-info">
        <Card title="Definition" bordered={false} style={{ width: 300 }}>
          <h3>{word.toUpperCase()}</h3>
          <p>{meaning}</p>
        </Card>
      </div>
    </div>
  );
};
