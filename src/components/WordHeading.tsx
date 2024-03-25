import React, { useRef } from "react";
import { useDictionaryContext } from "../context/Dictionary-context";
import { Play } from "phosphor-react";

function WordHeading() {
  let text: string | undefined;
  let audio: string | undefined;
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { dictionaryData, dark } = useDictionaryContext();

  const { word, phonetics } = dictionaryData?.[0] || {};

  if (phonetics) {
    phonetics.forEach((phoneticItem) => {
      if (phoneticItem.text) {
        text = phoneticItem.text;
      }
      if (phoneticItem.audio) {
        audio = phoneticItem.audio;
      }
    });
  }

  function handlePlay() {
    if (audioRef.current) {
      audioRef.current.play();
      console.log(audioRef);
    }
  }

  return (
    <>
      <div className=" flex sm:ml-4 sm:px-0 items-center lg:justify-between pt-[4.5rem] lg:gap-x-12">
        <div>
          <h1
            className={`sm:text-[2.4rem] lg:text-[6.4rem] font-bold transition-all duration-500 ${
              dark ? "text-white" : "text-2D2D2D"
            } `}
          >
            {word}
          </h1>
          <p
            className={`text-black sm:text-[1.8rem] pt-3 text-[2.4rem] ${
              dark ? "text-white" : "text-black"
            }`}
          >
            {text}
          </p>
        </div>
        {audio && (
          <button onClick={handlePlay}>
            <Play
              size={60}
              className="text-white bg-purple-700 rounded-full p-2 mb-8 sm:ml-32"
            />
            <audio src={audio} ref={audioRef}></audio>
          </button>
        )}
      </div>
    </>
  );
}

export default WordHeading;
