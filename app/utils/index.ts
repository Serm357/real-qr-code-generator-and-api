import { Dispatch, SetStateAction } from "react";

export const generateQrCode = async (
  inputText: String,
  backgroundColor: String,
  foregroundColor: String,
  setQrCodeUrl: Dispatch<SetStateAction<string>>
) => {
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
