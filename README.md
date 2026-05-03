# Real world Qr code generator and it's Free api

Life time free Api endpoint :-

- `/api/v1/generateQrCode?input=${inputText}&background=${backgroundColor}&foreground=${foregroundColor}`

### Transparent Background Support
To generate a QR code with a completely transparent background (useful for PNGs), pass `00000000` as the `foreground` parameter:
- `/api/v1/generateQrCode?input=${inputText}&background=${backgroundColor}&foreground=00000000`
