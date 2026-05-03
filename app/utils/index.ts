import { Dispatch, SetStateAction } from "react";

export const generateQrCode = async (
  inputText: String,
  backgroundColor: String,
  foregroundColor: String,
  setQrCodeUrl: Dispatch<SetStateAction<string>>,
  logoUrl?: string | null
) => {
  // console.log(swatchColor);

  try {
    const response = await fetch(
      `/api/v1/generateQrCode?input=${inputText}&background=${backgroundColor}&foreground=${foregroundColor}`
    );
    const data = await response.json();

    if (response.ok) {
      if (logoUrl) {
        await new Promise<void>((resolve, reject) => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          
          const qrImage = new window.Image();
          const logoImage = new window.Image();
          
          qrImage.onload = () => {
            canvas.width = qrImage.width;
            canvas.height = qrImage.height;
            
            if (ctx) {
              ctx.drawImage(qrImage, 0, 0);
              
              logoImage.onload = () => {
                // Logo takes up 22% of the QR code to maintain scannability
                const logoSize = canvas.width * 0.22;
                const xPos = (canvas.width - logoSize) / 2;
                const yPos = (canvas.height - logoSize) / 2;
                
                // Optional: Draw a solid background for the logo to ensure readability
                ctx.fillStyle = `#${foregroundColor}`; // using the UI 'foregroundColor' which is the QR code background
                ctx.fillRect(xPos - 5, yPos - 5, logoSize + 10, logoSize + 10);
                
                ctx.drawImage(logoImage, xPos, yPos, logoSize, logoSize);
                
                setQrCodeUrl(canvas.toDataURL("image/png"));
                resolve();
              };
              logoImage.onerror = () => {
                console.error("Failed to load logo image");
                setQrCodeUrl(data.qrCode);
                resolve();
              };
              logoImage.src = logoUrl;
            } else {
              setQrCodeUrl(data.qrCode);
              resolve();
            }
          };
          qrImage.onerror = () => {
            console.error("Failed to load QR image");
            reject();
          };
          qrImage.src = data.qrCode;
        });
      } else {
        setQrCodeUrl(data.qrCode);
      }
    } else {
      console.error("Error generating QR code:", data);
    }
  } catch (error) {
    console.error("Error generating QR code:", error);
  }
};
