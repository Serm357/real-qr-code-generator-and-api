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
import About from "./components/About";
import Hero from "./components/Hero";
import { generateQrCode } from "./utils";

const HomePage: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("21132e");
  const [foregroundColor, setForegroundColor] = useState("00ff00");
  const [backgroundDisplayColor, setBackgroundDisplayColor] =
    useState("#21132e");
  const [foregroundDisplayColor, setForegroundDisplayColor] =
    useState("#00ff00");
  const [swatchColor, setSwatchColor] = useState("000000");
  const [showColorPickerFore, setShowColorPickerFore] = useState(false);
  const [showColorPickerBack, setShowColorPickerBack] = useState(false);

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
    <div className="container mx-auto p-8  text-gray-800">
      <Hero />
      <section id="qrGenerator" className="container min-h-screen px-4 mt-5">
        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-gray-700">
            Foreground Color
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
                <h1>Foreground</h1>
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
            Background Color
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
                <h1>Background</h1>
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
        <button
          onClick={() =>
            generateQrCode(
              inputText,
              backgroundColor,
              foregroundColor,
              setQrCodeUrl
            )
          }
          className=" bg-red-500"
        >
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
        </div>
      </section>
      {/*  */}
      <section
        id=""
        className="grid grid-cols-1 md:grid-cols-4   w-full h-full md:max-w-screen-xl"
      >
        <div className="md:col-span-1 bg-gray-100 h-full">
          <h1 className="text-center font-bold text-2xl text-sky-300 mt-3">
            Choose Qrcode Colors
          </h1>
          <div className="flex md:flex-col items-center justify-center gap-3 p-2">
            <div className=" w-52 h-52 rounded-md bg-white flex flex-col items-center justify-center gap-2 ">
              <h1 className="text-center font-bold mt-1">Foreground Color</h1>
              <div
                className="bg-green-300 w-32 h-32 rounded-md"
                onClick={() => {}}
              >
                <h3 className="bg-white p-1 rounded-sm  m-1">#00ff00</h3>
              </div>
            </div>
            <div className="  w-52 h-52 rounded-md bg-white flex flex-col items-center justify-center gap-2 ">
              <h1 className="text-center font-bold mt-1">Background Color</h1>
              <div
                className="bg-green-300 w-32 h-32 rounded-md"
                onClick={() => {}}
              >
                <h3 className="bg-white p-1 rounded-sm   m-1">#00ff00</h3>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Right Column --> */}
        <div className="md:col-span-3 bg-gray-500 h-full">
          {/* <!-- Content for the right column --> */}
          Right Column
        </div>
      </section>
      {/*  */}
      <About />
    </div>
  );
};

export default HomePage;
