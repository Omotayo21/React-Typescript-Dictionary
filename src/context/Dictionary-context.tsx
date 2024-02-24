import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  Dispatch,
} from "react";

export type Definition = {
  antonyms?: string[];
  definition: string;
  example: string;
  synonyms?: string[];
};
type Phonetics = {
  audio: string;
  sourceUrl: string;
  text: string;
};

export type Meaning = {
  antonyms: string[];
  definitions: Definition[];
  partOfSpeech: string;
  synonyms: string[];
};
type Word = {
  meanings: Meaning[];
  phonetic: string;
  phonetics: Phonetics[];
  sourceUrls: string[];
  word: string;
  title: string;
};

type DictionaryContextProps = {
  inputValue: string;
  dictionaryData: Word[];
  isLoading: boolean;
  dark: boolean;
  setDark: Dispatch<React.SetStateAction<boolean>>;
  setInputValue: (inputValue: string) => void;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
};

const DictionaryContext = createContext<DictionaryContextProps | undefined>(
  undefined
);

const DictionaryProvider = ({ children }: { children: React.ReactNode }) => {
  const [dark, setDark] = useState<boolean>(false);
  const [dictionaryData, setDictionaryData] = useState<Word[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
        );
        const data = await response.json();
        setDictionaryData(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error fetching dictionary data:", error);
      }
    };

    fetchData();
  }, [inputValue]);
   useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );

    setDark(darkModeMediaQuery.matches);
  }, []);

  return (
    <DictionaryContext.Provider
      value={{
        dictionaryData,
        inputValue,
        setInputValue,
        isLoading,
        setIsLoading,
        dark,
        setDark,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
};
const useDictionaryContext = () => {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return context;
};
export { DictionaryProvider, useDictionaryContext };
