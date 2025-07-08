import React, { useState, useEffect, useRef } from "react";
import "./TerminalProfile.css";

// Define the welcome message as a constant
const WELCOME_MESSAGE = "Welcome to Poom's profile!";

const TerminalProfile: React.FC = () => {
  const availableCommands = ["help", "about", "experience", "clear"];
  type Command = string | { text: string; type: string };
  const [commands, setCommands] = useState<Command[]>([
    WELCOME_MESSAGE,
    "Available commands:",
    "- about: Learn more about me.",
    "- experience: See my work experience.",
    "- clear: Clear the terminal.",
  ]);
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  const terminalBodyRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom whenever a new command is added
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [commands]);

  const handleCommand = (command: string) => {
    let newCommands = [...commands];
    switch (command.toLowerCase()) {
      case "help":
        newCommands.push("Available commands:");
        newCommands.push("- about: Learn more about me.");
        newCommands.push("- experience: See my work experience.");
        newCommands.push("- clear: Clear the terminal.");
        break;
      case "about":
        newCommands.push("Hi, I'm Sorawit! A passionate developer.");
        break;
      case "experience":
        newCommands.push("Experience:");
        newCommands.push(
          "- Software Engineer at Tech Company (2020 - Present)"
        );
        newCommands.push(
          "- Frontend Developer at Another Tech Company (2018 - 2019)"
        );
        break;
      case "clear":
        newCommands = [
          WELCOME_MESSAGE,
          "Available commands:",
          "- about: Learn more about me.",
          "- experience: See my work experience.",
          "- clear: Clear the terminal.",
        ];
        break;
      default:
        newCommands.push({
          text: `Unknown command: ${command}`,
          type: "error",
        }); // Mark as an error
        break;
    }
    setCommands(newCommands);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setCommands((prev) => [...prev, `> ${input}`]);
      handleCommand(input.trim());
      setHistory((prev) => [...prev, input.trim()]);
      setInput("");
      setSuggestion("");
      setHistoryIndex(null); // Reset history navigation
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab" || e.key === "ArrowRight") {
      e.preventDefault();
      if (suggestion) {
        setInput(suggestion);
        setSuggestion("");
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex =
          historyIndex === null
            ? history.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex =
          historyIndex === null
            ? history.length - 1
            : Math.min(history.length - 1, historyIndex + 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    const matchingCommand = availableCommands.find((cmd) =>
      cmd.startsWith(value.trim())
    );
    setSuggestion(matchingCommand || "");
  };

  return (
    <div className="terminal">
      <div className="terminal-header">
        <span className="terminal-title">Poom's Profile</span>
      </div>
      <div className="terminal-body" ref={terminalBodyRef}>
        {commands.map((cmd, index) =>
          typeof cmd === "string" ? (
            <div key={index} className="terminal-line">
              {cmd}
            </div>
          ) : (
            <div key={index} className={`terminal-line ${cmd.type}`}>
              {cmd.text}
            </div>
          )
        )}
      </div>
      <form onSubmit={handleSubmit} className="terminal-input-area">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="terminal-input"
          autoFocus
        />
        {suggestion && (
          <span className="terminal-suggestion">{suggestion}</span>
        )}
      </form>
    </div>
  );
};

export default TerminalProfile;
