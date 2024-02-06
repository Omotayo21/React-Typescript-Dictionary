import React from 'react';
import { HeartBreak } from 'phosphor-react';
import { useDictionaryContext } from '../context/Dictionary-context';

const Error = () => {
  const {dark} = useDictionaryContext();
  return (
    <div>
      <div className="sm:px-0 flex flex-col items-center justify-center gap-10 px-12 pt-28 text-center">
        
        <HeartBreak size={30} className={ `${
                dark ? "text-white" : "text-2D2D2D"
              }`} /> 
        <h1
          className={`pt-6 text-[1.4rem] font-bold transition-all duration-500 ${
                dark ? "text-white" : "text-2D2D2D"
              }`}
        >
          No Definitions Found
        </h1>
        <p className={`text-[1.2rem] leading-[2.4rem] text-757575 px-40 ${
                dark ? "text-white" : "text-2D2D2D"
              }`}>
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    </div>
  );
}

export default Error