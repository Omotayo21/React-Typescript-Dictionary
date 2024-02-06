import React from "react";
import { Meaning, useDictionaryContext } from "../context/Dictionary-context";
import Definitions from "./Definition";


function WordMeaning({ definitions, partOfSpeech, antonyms, synonyms }: Meaning) {
  const {dark } = useDictionaryContext();
  return (
    <>
      <div className=" lg:ml-12 sm:ml-4 mt-8">
        <div className=" flex items-center gap-8 ">
          <div>
            <h2
              className={`sm:text-[1.2rem] text-[1.4rem] font-bold italic transition-all duration-500 ${
                dark ? "text-white" : "text-black"
              }`}
            >
              {partOfSpeech}
            </h2>
            <div
              className={`h-[0.1rem] lg:w-[30rem] sm:w-[11rem] -mt-4 ml-24 transition-all duration-500 ${
                dark ? "bg-white" : "bg-black"
              }`}
            ></div>
          </div>
        </div>
        <div className="sm:space-y-2 space-y-8">
          <h3 className="sm:text-[1.6rem] text-[1.2rem] text-black mt-6">
            Meaning
          </h3>
          <ul className="space-y-[1.1rem]">
            {definitions.map((definition) => (
              <Definitions
                definition={definition.definition}
                example={definition.example}
              />
            ))}
          </ul>

          {synonyms && synonyms.length > 0 && (
            <div>
              <p className=" text-purple-600">
                Synonyms: {`${synonyms.join(", ")}.`}
              </p>
            </div>
          )}
          {antonyms && antonyms.length > 0 && (
            <div>
              <p className=" text-purple-600">
                Antonyms: {`${antonyms.join(", ")}.`}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );

 
}

export default WordMeaning;
