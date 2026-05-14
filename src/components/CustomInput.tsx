interface ICustomInput {
  placeholder: string;
}

const CustomInput = () => {
  return (
    <input className="border border-blue-700 w-full h-[50px] px-4 outline-none rounded-md" />
  );
};

export default CustomInput;
