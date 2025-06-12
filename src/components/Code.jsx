import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function Code({ children, language = "php" }) {
  return (
    <>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          borderRadius: "0.5rem",
          padding: "1rem",
          fontSize: "1rem",
          background: "#23272e",
        }}
        showLineNumbers
      >
        {children}
      </SyntaxHighlighter>
    </>
  );
}

export default Code;
