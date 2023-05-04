import Terminal from "@/components/Terminal";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { gradients } from "@/components/gradients";
const getRandomGradient = () => {
  return gradients[Math.floor(Math.random() * gradients.length)];
};
const Index = () => {
  const captureRef = useRef(null);
  const [checked, setChecked] = useState(true);
  const [background, setGradient] = useState(getRandomGradient());
  const changeBackgroundColor = () => {
    setGradient(getRandomGradient()); // @ts-ignore
    if (captureRef.current && captureRef.current.style.backgroundImage !== "") {
      // @ts-ignore
      captureRef.current.style.backgroundImage = "";
    }
  };

  const handleCapture = async () => {
    if (!captureRef.current) return;
    try {
      const canvas = await html2canvas(captureRef.current);
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "image.png";
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.open("https://anshusharma.me", "_blank");
    } catch (error) {
      console.log(error);
    }
  };

  const handleTheme = (e: unknown) => {
    // @ts-ignore
    const captureRefStyle = captureRef.current && captureRef.current.style; // @ts-ignore
    if (captureRefStyle && captureRefStyle.backgroundImage !== "") {
      // @ts-ignore
      captureRefStyle.backgroundImage = "";
    } else {
      changeBackgroundColor();
    }
    // @ts-ignore
    setChecked(e.target.checked);
  };
  return (
    <div className="p-10 h-screen justify-center items-center grid place-content-center">
      <div
        ref={captureRef}
        className="p-10 orientation rounded resize w-full overflow-auto cursor-auto flex justify-center min-w-[340px] scrollbar-hide"
        style={{ background }}
      >
        <Terminal />
      </div>
      <div className="flex my-4">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-[#24292F] to-gray-900 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-cyan-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={changeBackgroundColor}
        >
          Randomize
        </button>
        <div className="flex items-center justify-center w-full flex-col gap-2">
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Background
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={checked}
              className="sr-only peer"
              onChange={handleTheme}
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <button
          onClick={handleCapture}
          type="button"
          className="text-white bg-gradient-to-r from-[#414245] to-gray-900 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-cyan-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Export
        </button>
      </div>
    </div>
  );
};

export default Index;
