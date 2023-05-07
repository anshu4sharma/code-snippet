import { useState } from "react";
import "prismjs/themes/prism-okaidia.css";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { sampleCode } from "./gradients";
import "prismjs/themes/prism-okaidia.css";

const Terminal = () => {
  const [code, setCode] = useState(sampleCode);
  return (
    <div className={`w-full min-w-[300px] h-full min-h-[300px]`}>
      <div
        className={`select-none inverse-toggle px-5 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased pb-6 pt-4 rounded-lg leading-normal overflow-hidden bg-[#111b27]`}
      >
        <div className="top mb-2 flex items-center">
          <div className="h-3 w-3 bg-red-500 rounded-full" />
          <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full" />
          <div className="ml-2 h-3 w-3 bg-green-500 rounded-full" />
          <textarea
            className="bg-inherit ml-6 text-gray-100 w-2/3  focus:outline-none resize-none overflow-hidden"
            rows={1}
            id="code-area"
            placeholder="Paste code here..."
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="mt-4 flex focus-visible:outline-none">
          <SyntaxHighlighter
            className="focus-visible:outline-none text-xs"
            language={"typescript"}
            style={coldarkDark}
            wrapLongLines
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
