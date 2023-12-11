"use client";
import { useState } from "react";
import {
  ChromePicker,
  AlphaPicker,
  SketchPicker,
  GithubPicker,
  CirclePicker,
  HuePicker,
  CompactPicker,
  SwatchesPicker,
  MaterialPicker,
  ColorResult,
} from "react-color";

const HomePage: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("00ff00");
  const [foregroundColor, setForegroundColor] = useState("ffffff");
  const [backgroundDisplayColor, setBackgroundDisplayColor] =
    useState("#00ff00");
  const [foregroundDisplayColor, setForegroundDisplayColor] =
    useState("#ffffff");
  const [swatchColor, setSwatchColor] = useState("000000");
  const [showColorPickerFore, setShowColorPickerFore] = useState(false);
  const [showColorPickerBack, setShowColorPickerBack] = useState(false);

  const generateQrCode = async () => {
    // console.log(swatchColor);

    try {
      const response = await fetch(
        `/api/v1/generateQrCode?input=${inputText}&background=${backgroundColor}&foreground=${foregroundColor}`
      );
      const data = await response.json();

      if (response.ok) {
        setQrCodeUrl(data.qrCode);
      } else {
        console.error("Error generating QR code:", data);
      }
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const handleColorChange = (
    color: { hex: string },
    target: "background" | "foreground"
  ) => {
    if (target === "background") {
      setBackgroundColor(() => {
        // removing  " #" symbol from the hex value , this is to make the value available at searchParams
        const formatedString = color.hex.toString().replace("#", "").toString();
        return formatedString;
      });
      setBackgroundDisplayColor(color.hex);
    } else {
      setForegroundColor(() => {
        const formatedString = color.hex.toString().replace("#", "").toString();
        return formatedString;
      });
      setForegroundDisplayColor(color.hex);
    }
  };

  return (
    <div
      className={`container mx-auto p-8 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h1
        className={`text-4xl mb-8 underline ${
          isDarkMode ? "text-blue-500" : "text-green-500"
        }`}
      >
        QR Code Generator
      </h1>
      <div className="mb-4 relative">
        <label className="block text-sm font-medium text-gray-700">
          Background Color
        </label>
        <div className=" ">
          <button
            className="w-10 h-10 rounded-full cursor-pointer"
            style={{ backgroundColor: backgroundDisplayColor }}
            onClick={() => setShowColorPickerBack((prev) => !prev)}
          >
            toggle
          </button>
          {showColorPickerBack && (
            <div className="absolute z-10 top-0 right-0 mt-12">
              <h1>background</h1>
              <SwatchesPicker
                color={backgroundColor}
                onChange={(color) => handleColorChange(color, "background")}
              />
            </div>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Foreground Color
        </label>
        <div className=" ">
          <button
            className="w-10 h-10 rounded-full cursor-pointer"
            style={{ backgroundColor: foregroundDisplayColor }}
            onClick={() => setShowColorPickerFore((prev) => !prev)}
          >
            {" "}
            toggle
          </button>
          {showColorPickerFore ? (
            <div className="absolute z-10 top-0 right-0 mt-12">
              <h1>foreground</h1>
              <SwatchesPicker
                color={foregroundColor}
                onChange={(color) => handleColorChange(color, "foreground")}
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Text Input
        </label>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="py-2 px-4 border border-gray-300 rounded"
          placeholder="Enter text"
        />
      </div>
      <button onClick={generateQrCode} className=" bg-red-500">
        Generate QR Code
      </button>
      {qrCodeUrl && (
        <div className="mt-8">
          <h2 className="text-2xl mb-4">Generated QR Code:</h2>
          <img src={qrCodeUrl} alt="QR Code" className="max-w-full" />
        </div>
      )}
      <h1 className="font-bold text-2xl">pickers</h1>
      <div>
        <h1> SwatchesPicker </h1>
        <div className="h-52 w-52" style={{ backgroundColor: swatchColor }}>
          gggg
        </div>
        <div>
          <SwatchesPicker
            color={swatchColor}
            // height={100}
            // width={100}
            onChange={(color: ColorResult) => setSwatchColor(color.hex)}
            className="w-full h-screen"
          />
        </div>
      </div>
      <div className="flex items-center mt-8">
        <label className={`text-${isDarkMode ? "white" : "black"} mr-4`}>
          Dark Mode
        </label>
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
          className="appearance-none w-10 h-5 bg-gray-300 rounded-full outline-none cursor-pointer"
        />
      </div>
    </div>
  );
};

export default HomePage;
