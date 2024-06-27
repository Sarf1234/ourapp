import { createContext, useContext } from "react";


export const PageProductData = createContext();

export const PageProductDataProvider = PageProductData.Provider


export default function usePageProductData(){
    return useContext(PageProductData)
}