import { useContext, createContext } from "react";
export const GeneralContext = createContext();
export const useGeneralContext = () => useContext(GeneralContext);
