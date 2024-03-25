import React from "react";
import { useDictionaryContext } from "../context/Dictionary-context";
import img3 from "../dictionary/icon-moon.svg";

const Header = () => {
  const { setDark, dark } = useDictionaryContext();
  const toggleTheme = () => {
    setDark((prevTheme) => !prevTheme);
  };

  return (
    <>
      <div className=" sm:ml-[14.5rem] lg:ml-[68rem] mb-6">
        <div className="flex items-center gap-8">
          <label
            htmlFor="toggle"
            className={`relative block h-[1.85rem] w-[6rem] cursor-pointer rounded-full bg-purple-600 before:absolute before:left-2 before:top-[4px] before:h-[1.3rem] before:w-[1.3rem] before:rounded-full before:bg-white before:transition-all before:duration-300 ${
              dark ? "before:translate-x-full" : "before:translate-x-0"
            }`}
          >
            <input
              type="checkbox"
              id="toggle"
              className="hidden"
              checked={dark}
              onChange={toggleTheme}
            />
            <div></div>
          </label>

          <img src={img3} alt="moon icon" />
        </div>
      </div>
    </>
  );
};

export default Header;
