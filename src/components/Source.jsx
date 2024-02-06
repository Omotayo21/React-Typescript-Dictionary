import React from 'react';
import { useDictionaryContext } from '../context/Dictionary-context';
import img1 from "../dictionary/icon-new-window.svg"

const Source = () => {
    const {dictionaryData, dark} = useDictionaryContext();
    const { sourceUrls } = dictionaryData?.[0] || {}
  return (
    <footer className="mt-4 flex flex-row gap-1">
      <p className={`text-sm ${dark ? "text-white" : "text-black"}`}>
        {" "}
        Source :{" "}
      </p>{" "}
      <span
        className={`underline text-sm flex flex-row ${
                dark ? "text-white" : "text-black"
              }`}
      >
        {" "}
        {sourceUrls?.[0]} <img src={img1} />
      </span>
    </footer>
  );
}

export default Source;