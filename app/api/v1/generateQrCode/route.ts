import { NextResponse, type NextRequest } from "next/server";
import QRCode from "qrcode";

export async function GET(request: NextRequest, response: NextResponse) {
  //get request Url search params
  const searchParam = request.nextUrl.searchParams;
  const inputText = searchParam.get("input");
  const backgroundColorParam = searchParam.get("background");
  const foregroundColorParam = searchParam.get("foreground");

  //type convention for the QrCode Data Url

  const inputTextString = inputText ? inputText.toString() : "";
  const backgroundColor = backgroundColorParam
    ? backgroundColorParam?.toString()
    : "";
  const foregroundColor = foregroundColorParam
    ? foregroundColorParam?.toString()
    : "";

  try {
    const url = await QRCode.toDataURL(inputTextString, {
      color: { dark: backgroundColor, light: foregroundColor },
    });
    // console.log({ url });

    return Response.json({ qrCode: url });
  } catch (err) {
    console.error("Error generating QR code:", err);
    return Response.json(err);
  }
}
