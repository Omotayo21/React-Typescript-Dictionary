import React from 'react';
import { useDictionaryContext } from '../context/Dictionary-context';
import { Definition } from '../context/Dictionary-context';


const Definitions = ( { definition, example} : Definition) => {
    const { dark } = useDictionaryContext()
   return (
     <>
       <li className="grid grid-cols-[0.5rem_1fr] items-start gap-x-8 gap-y-2 lg:w-[35rem] sm:w-[17rem]">
         <span className="mt-4 h-[0.5rem] w-[0.5rem] basis-[0.5rem] rounded-full bg-[#8f19e8]"></span>
         <span
           className={` text-[1.1rem] transition-all duration-300 ${
             dark ? "text-white" : "text-black"
           }`}
         >
           {definition}
         </span>
         {example && (
           <span
             className={`col-start-2 text-[0.8rem] ${
               dark ? "text-white" : "text-black"
             }`}
           >
             Example : "{example}"
           </span>
         )}
       </li>
      
     </>
   );
}

export default Definitions