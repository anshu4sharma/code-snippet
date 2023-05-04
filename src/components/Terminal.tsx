import React, { useState } from "react";
import "prismjs/themes/prism-okaidia.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialOceanic,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { sampleCode } from "./gradients";
const Terminal = (_: any, ref: React.LegacyRef<HTMLDivElement>) => {
  const [title, setTitle] = useState("index.ts");
  return (
    <div className={`w-full min-w-[300px] h-full min-h-[300px]`}>
      <div
        className={`select-none inverse-toggle px-5 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased pb-6 pt-4 rounded-lg leading-normal overflow-hidden bg-[#263238]`}
      >
        <div className="top mb-2 flex items-center">
          <div className="h-3 w-3 bg-red-500 rounded-full" />
          <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full" />
          <div className="ml-2 h-3 w-3 bg-green-500 rounded-full" />
          <div className="w-2/3 text-center overflow-scroll h-4 ml-4 scrollbar-hide">
            <input
              className="text-center focus-visible:outline-none bg-inherit w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4 flex  focus-visible:outline-none">
          <SyntaxHighlighter
            className="focus-visible:outline-none text-xs"
            language={"kotlin"}
            style={materialOceanic}
            contentEditable
            suppressContentEditableWarning
          >
            {sampleCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
