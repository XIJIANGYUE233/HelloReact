import React, { useState } from "react";

interface AppProps
{
  children?:React.ReactNode
}

interface AppStateValue {
    username:string;
    shoppingCart:{item:{id :number;name:string}[]} ;
}

const defaultContextValue:AppStateValue={
    username:"西江月",
    shoppingCart: {item :[]},
  }
  
  
  export const appContext=React.createContext(defaultContextValue)

  export const AppStateProvider: React.FC<AppProps> = (props) => {
    const [state, setState] = useState(defaultContextValue);
  
    return (
      <appContext.Provider value={state}>  
      {AppProps.children}
      </appContext.Provider>
    );
  };