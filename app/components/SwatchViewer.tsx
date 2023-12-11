import { Color, SwatchesPicker } from "react-color";

const SwatchViewer = ({
  foregroundColor,
  showColorPickerFore,
  handleColor,
}: {
  foregroundColor: Color;
  showColorPickerFore: boolean;
  handleColor: (
    color: { hex: string },
    target: "background" | "foreground"
  ) => String;
}) => {
  return (
    <div className="absolute top-0 right-0 w-[400px] h-screen flex items-center justify-center">
      {showColorPickerFore ? (
        <div className="absolute z-10 top-0 right-0 mt-12">
          <h1>foreground</h1>
          <SwatchesPicker
            color={foregroundColor}
            onChange={(color) => handleColor(color, "foreground")}
          />
        </div>
      ) : null}
    </div>
  );
};
export default SwatchViewer;
