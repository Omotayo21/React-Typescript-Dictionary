import React, { useState } from "react";
import Header from "./components/Header";
import { MagnifyingGlass } from "phosphor-react";
import Error from "./components/Error";
import { useDictionaryContext } from "./context/Dictionary-context";
import WordHeading from "./components/WordHeading";
import WordMeaning from "./components/Meaning";
import Source from "./components/Source";

const App = () => {
  const {
    setInputValue,
    dark,
    dictionaryData,
    isLoading,
    setIsLoading,
  } = useDictionaryContext();
  const [searchInput, setSearchInput] = useState("");
  const [empty, setEmpty] = useState(false);
  const { meanings } = dictionaryData?.[0] || {};

  const search = async () => {
    if (searchInput.trim() === "") {
      setEmpty(true);
    } else {
      setInputValue(searchInput);
      setEmpty(false);
      setIsLoading(true);
    }
  };

  return (
    <div className={` min-h-[100dvh] bg-${dark ? "black" : "white"} sm: `}>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          <input
            className={`lg:w-[35rem] sm:w-[23rem] sm:mr-16 rounded-lg bg-gray-300 pl-6 focus:border-2 h-16 focus:border-purple-500 focus:outline-none`}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <MagnifyingGlass
            size={28}
            className="text-black lg:-ml-28 sm:-ml-24 "
            onClick={search}
          />
          <br />
        </div>
        {empty && (
          <p className=" text-xl text-gray-700 ">
            {" "}
            You have to input something chief
          </p>
        )}

        {isLoading ? (
          <p>Loading...</p>
        ) : dictionaryData.length > 0 ? (
          <div>
            <WordHeading />
            {meanings.map((meaning, index) => (
              <WordMeaning
                key={index}
                partOfSpeech={meaning.partOfSpeech}
                antonyms={meaning.antonyms}
                definitions={meaning.definitions}
                synonyms={meaning.synonyms}
              />
            ))}
            <Source />
          </div>
        ) : dictionaryData.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <h1
              className={`text-2D2D2D pt-12 text-[1.4rem] font-bold transition-all duration-500 ${
                dark ? "text-white" : "text-2D2D2D"
              }`}
            >
              Welcome to Rahman's Dictionary
            </h1>
            <p className="pt-3 sm:px-12 lg:px-64 text-[1.2rem] text-gray-500">
              Kindly input a word into the search field to discover its
              comprehensive definitions.
            </p>
          </div>
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
};

export default App;
