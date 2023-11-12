import React, { createContext, useState } from "react";

interface ContextProps {
  MyID: number;
  userLogin: boolean;
  setUserLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TeamC = createContext<ContextProps | null>(null);

const Context = ({ children }: { children: React.ReactNode }) => {
  const MyID = 2;
  const [userLogin, setUserLogin] = useState(false);

  return (
      <TeamC.Provider value={{ MyID, userLogin, setUserLogin }}>
        {children}
      </TeamC.Provider>
  );
};

export default Context;
