import { useEffect, useState } from "react";
import { IoIosSunny } from "react-icons/io";
import { LuMoonStar } from "react-icons/lu";

function Navbar({ setShowFeedbacks }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [isDarkMode]);

  return (
    <div className="flex justify-between p-4">
      <div></div>
      <div className="flex gap-10">
        <button onClick={() => setIsDarkMode((prev) => !prev)}>
          {isDarkMode ? <IoIosSunny size={22} /> : <LuMoonStar size={20} />}
        </button>
        <button
          onClick={() => setShowFeedbacks((prev) => !prev)}
          className="btn px-6"
        >
          Admin
        </button>
      </div>
    </div>
  );
}

export default Navbar;
