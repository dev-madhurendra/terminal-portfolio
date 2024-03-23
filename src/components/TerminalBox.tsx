import React, { useEffect, useState, useRef } from "react";
import renderCmd from "../utils/renderCmd";
import CmdUserInput from "./CmdUserInput";
import EnteredCmd from "./EnteredCmd";
import TodayDate from "./TodayDate";
import Navbar from "./Navbar";
import Welcome from "./commands/Welcome";
import TerminalIcon from "@mui/icons-material/Terminal";
import Draggable from "react-draggable";
import "./styles/TerminalBox.css";
import { terminalIconContainerStyles } from "../utils/styles";

export default function TerminalBox() {
  const [isTerminalMaximized, setIsTerminalMaximized] = useState(false);
  const [terminalCount, setTerminalCount] = useState(0);
  const [enteredCmd, setEnteredCmd] = useState([
    { cmd: "", Component: Welcome, time: new Date().toLocaleTimeString() }
  ]);

  const dummyRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (terminalCount > 0) {
      dummyRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [enteredCmd]);

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyEvent);
    return () => {
      document.body.removeEventListener("keydown", handleKeyEvent);
    };
  }, []);

  const handleSubmit = (cmd: string) => {
	if (cmd.toLocaleLowerCase() === "clear") {
		setEnteredCmd([])	
	}
    setEnteredCmd(currentCmd => [
      ...currentCmd,
      { ...renderCmd(cmd), time: new Date().toLocaleTimeString() },
    ]);
  };

  const handleKeyEvent = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key.toLocaleLowerCase() === "l") {
      setEnteredCmd([]);
    }
  };

  const handleAction = (action: string) => {
    switch (action) {
      case "minimize":
        setTerminalCount(prevCount => Math.max(prevCount - 1, 0));
        break;
      case "close":
        setTerminalCount(prevCount => Math.max(prevCount - 1, 0));
        break;
      case "maximize":
        setIsTerminalMaximized(!isTerminalMaximized);
        break;
      case "split":
        setTerminalCount(prevCount => Math.min(prevCount + 1, 3));
        break;
      default:
        break;
    }
  };

  return (
    <>
      {Array.from({ length: terminalCount }).map((_, index) => (
        <Draggable handle=".drag-handle" key={index}>
          <div className={isTerminalMaximized ? "maximized" : "cursor-move"}>
            <Navbar
              onCrossIconClick={() => handleAction("close")}
              onMaximizeClick={() => handleAction("maximize")}
              onMinimizeClick={() => handleAction("minimize")}
              onSplitNewTerminal={() => handleAction("split")}
              isMaximized={isTerminalMaximized}
            />
            <div
              className={`border-x-2 border-b-2 border-slate-800 rounded-b-md mx-auto text-gray-300 text-xl p-2 overflow-y-auto ${
                isTerminalMaximized ? "maximized-terminal" : "h-55vh max-w-4xl"
              } bg-black bg-opacity-75 box drag-handle`}
            >
              <TodayDate />
              <EnteredCmd enteredCmd={enteredCmd} />
              <CmdUserInput onSubmit={handleSubmit} />
              <div ref={dummyRef}></div>
            </div>
          </div>
        </Draggable>
      ))}
      {terminalCount === 0 && (
        <TerminalIcon
          sx={terminalIconContainerStyles}
          className="bubble-animation"
          onClick={() => handleAction("split")}
        />
      )}
    </>
  );
}
