import { ImSpinner3 } from "react-icons/im";

function Spinner() {
  return (
    <div className="flex justify-center  mt-16">
      <ImSpinner3 size={40} className="animate-spin" />
    </div>
  );
}

export default Spinner;
