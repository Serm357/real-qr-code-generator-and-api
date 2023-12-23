// QRCodeInfoPage.jsx
import React from "react";
import "../globals.css";

// QRCodeInfoPage.jsx

const QRCodeInfoPage = () => {
  return (
    <section className="p-3 ">
      <h1 className="text-3xl font-bold mb-4 text-center">
        QR Code API Information
      </h1>
      <div className="text-center text-lg ">
        <p>Our api is super simple to intergrate and developer friendly. </p>
        <p>Here is a step by step guide on how to use the api </p>
      </div>
      <div className="mb-8">
        <h1 className="text-lg mb-2">Base Url:</h1>
        <code className="bg-gray-200   p-2 rounded">
          const BaseUrl = "https://real-qr-code-generator-and-api.vercel.app/"
        </code>
        <h1 className="text-lg mb-2">API Endpoint:</h1>
        <code className="bg-gray-200   p-2 rounded">
          {`{"{baseUrl}"}/api/v1/generateQrCode?input=${"{inputText}"}
            &background=$
            {"{backgroundColor}"}&foreground=${"{foregroundColor}"}`}
        </code>
      </div>

      <div className="mb-8">
        <h1 className="text-lg mb-2">Parameters:</h1>
        <ul className="list-disc list-inside">
          <li>
            <code className="text-green-500">inputText</code>: The text to be
            encoded in the QR code.
          </li>
          <li>
            <code className="text-green-500">backgroundColor</code>: The
            background color of the QR code.
          </li>
          <li>
            <code className="text-green-500">foregroundColor</code>: The
            foreground color of the QR code.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-lg mb-2">Example Usage:</h1>
        <code className="bg-gray-200   p-2 rounded">
          {`const response = await fetch('"${"baseUrl"}"/api/v1/generateQrCode?input={inputText}&background={backgroundColor}&foreground={foregroundColor}');`}
        </code>
        <div className="mt-3">
          {" "}
          <code className="bg-gray-200 p-2 rounded-sm ">
            {`const data = await response.json();`}
          </code>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-lg mb-2">Response Handling:</h1>
        <p className="mb-4">
          The API will return a JSON object containing the generated QR code
          image URL.
        </p>
        <code className="bg-gray-200   p-2 rounded">
          {`{
               "qrCode": "data:image/png;base64,iVBORw0KG..."
             }`}
        </code>
      </div>

      <div className="mb-8">
        <h1 className="text-lg mb-2">Error Handling:</h1>
        <p className="mb-4">
          Handle errors gracefully by checking the response status and
          displaying appropriate messages.
        </p>
        <code className="bg-red-200 dark:bg-red-600 p-2 rounded">
          {`if (!response.ok) {
                   console.error('Error:', response.status);
                   // Handle error display or retry logic
                 }`}
        </code>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        <b>Note:</b> Make sure to replace{" "}
        <code className="bg-gray-200">{"{inputText}"}</code>,{" "}
        <code className="bg-gray-200">{"{backgroundColor}"}</code>, and{" "}
        <code className="bg-gray-200">{"{foregroundColor}"}</code> with your
        desired values.
      </p>
      {/* EXAMPLE REACT.JS INTERGRATION COMING SOON */}
    </section>
  );
};

export default QRCodeInfoPage;
