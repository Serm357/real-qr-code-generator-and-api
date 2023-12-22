"use client";

import { ChangeEvent, useState } from "react";
import { SwatchesPicker } from "react-color";
import Image from "next/image";
import { generateQrCode } from "../utils";

const QrGenerator = () => {
  const [inputText, setInputText] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("000000");
  const [foregroundColor, setForegroundColor] = useState("ffffff");
  const [backgroundDisplayColor, setBackgroundDisplayColor] =
    useState("#000000");
  const [foregroundDisplayColor, setForegroundDisplayColor] =
    useState("#ffffff");
  //  const [swatchColor, setSwatchColor] = useState("000000");
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
  function handleQrcodeGeneration() {
    generateQrCode(inputText, backgroundColor, foregroundColor, setQrCodeUrl);
    setInputText("");
  }
  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }
  return (
    <section
      id="qrGenerator"
      className="grid grid-cols-1 md:grid-cols-4   w-full h-full md:max-w-screen-xl md:divide-x-2 max-md:divide-y-2 divide-red-200 "
    >
      {/* left side */}
      <div className="md:col-span-1 bg-gray-100 h-full p-5">
        <h1 className="text-center font-bold text-2xl text-sky-300 mt-3">
          Choose Qrcode Colors
        </h1>
        <div className="flex md:flex-col items-center justify-center gap-3 p-2">
          <div className=" w-52 h-52 rounded-md bg-white flex flex-col items-center justify-center gap-2 ">
            <h1 className="text-center font-bold mt-1">Background Color</h1>
            <div
              className="bg-gray-300 w-32 h-32 rounded-md flex flex-col items-center justify-center gap-2"
              onClick={() => {
                showColorPickerBack && setShowColorPickerBack(false);
                setShowColorPickerFore((prev) => !prev);
              }}
            >
              <input
                className="bg-white p-1 rounded-sm  m-1 text-center w-28"
                type="text"
                placeholder={foregroundDisplayColor}
                // onChange={(e) => console.log(e.target.value)}
              />

              <div
                className=" w-24 h-24 rounded-md hover:cursor-pointer mb-2"
                style={{ backgroundColor: foregroundDisplayColor }}
              ></div>
            </div>
          </div>
          <div className="  w-52 h-52 rounded-md bg-white flex flex-col items-center justify-center gap-2 ">
            <h1 className="text-center font-bold mt-1">Foreground Color</h1>
            <div
              className="bg-gray-300 w-32 h-32 rounded-md flex flex-col items-center justify-center gap-2"
              onClick={() => {
                showColorPickerFore && setShowColorPickerFore(false);
                setShowColorPickerBack((prev) => !prev);
              }}
            >
              <input
                className="bg-white p-1 rounded-sm   m-1 text-center w-28"
                type="text"
                placeholder={backgroundDisplayColor}
              />

              <div
                className=" w-24 h-24 rounded-md hover:cursor-pointer mb-2"
                style={{ backgroundColor: backgroundDisplayColor }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Right Column --> */}
      <div className="md:col-span-3 bg-gray-200 h-full p-5 relative">
        {/* <!-- Content for the right column --> */}
        <div className="flex flex-col items-center justify-center gap-2">
          {" "}
          <h1 className="text-2xl font-bold text-sky-300">
            {" "}
            Enter Text below to generate Qrcode{" "}
          </h1>{" "}
          <input
            type="text"
            value={inputText}
            onChange={(e) => handleInput(e)}
            placeholder="eg:- https://serm-dev.vercel.app"
            className="w-full p-3 my-3 outline-none rounded-md"
          />
          <button
            onClick={handleQrcodeGeneration}
            className="bg-green-300 hover:opacity-50 font-bold text-white px-2 py-3 rounded-md "
          >
            Generate
          </button>
          <div className="p-3 w-full h-full flex items-center justify-center">
            {" "}
            {qrCodeUrl ? (
              <div className="mt-8">
                <h2 className="text-2xl mb-4">Generated QR Code:</h2>
                <Image
                  width={250}
                  height={250}
                  src={qrCodeUrl}
                  alt="QR Code"
                  className="max-w-full"
                />
              </div>
            ) : (
              <p>no qr yet</p>
            )}
          </div>
        </div>
        {/* colorpickers display */}
        <div className="absolute w-full top-9 left-9 z-10">
          {showColorPickerFore ? (
            <>
              <h1>Background</h1>
              <SwatchesPicker
                color={foregroundColor}
                onChange={(color) => handleColorChange(color, "foreground")}
              />
            </>
          ) : showColorPickerBack ? (
            <>
              <h1>Foreground</h1>
              <SwatchesPicker
                color={backgroundColor}
                onChange={(color) => handleColorChange(color, "background")}
              />
            </>
          ) : null}
        </div>
        {/* colorpickers display */}
      </div>
    </section>
  );
};
export default QrGenerator;
