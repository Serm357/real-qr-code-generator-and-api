const ColorChooser = ({
  name,
  handleClick,
}: {
  name: String;
  handleClick: () => String;
}) => {
  return (
    <div className=" w-52 h-52 rounded-md bg-white flex flex-col items-center justify-center gap-2 ">
      <h1 className="text-center font-bold mt-1">{name}</h1>
      <div className="bg-green-300 w-32 h-32 rounded-md" onClick={() => {}}>
        <h3 className="bg-white p-1 rounded-sm  m-1">#00ff00</h3>
      </div>
    </div>
  );
};
export default ColorChooser;
