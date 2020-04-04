import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import { AudioOutlined } from "@ant-design/icons";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
};

const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  startListening,
  stopListening,
  findWordFromSpeech,
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  const callApi = () => {
    console.log("Calling");
    findWordFromSpeech(transcript);
    resetTranscript();
    stopListening();
  };
  return (
    <div>
      {/* <button onMouseDown={startListening} onMouseUp={stopListening}>
        Listen
      </button> */}
      <AudioOutlined
        onMouseDown={startListening}
        onMouseUp={() => callApi()}
        onMouseLeave={stopListening}
        style={{ fontSize: "2rem", color: "#08c", padding: "10px 10px" }}
      />
      <span>{transcript}</span>
    </div>
  );
};

Dictaphone.propTypes = propTypes;
var options = {
  autoStart: false,
};
export default SpeechRecognition(options)(Dictaphone);
