import { NextResponse, type NextRequest } from "next/server";
import QRCode from "qrcode";

// export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request: NextRequest, response: NextResponse) {
  const searchParam = request.nextUrl.searchParams;
  const inputText = searchParam.get("input");
  const backgroundColor = searchParam.get("background") || "#ffffff"; // Default to white
  const foregroundColor = searchParam.get("foreground") || "#000000"; // Default to black
  const inputTextString = inputText ? inputText.toString() : "";

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
