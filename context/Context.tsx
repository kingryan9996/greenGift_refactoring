import React, { createContext, useState } from "react";

interface ContextProps {
  userLogin: any;
  setUserLogin: React.Dispatch<React.SetStateAction<any>>;
  userGiftBox: UserGiftBoxType;
  setUserGiftBox: React.Dispatch<React.SetStateAction<UserGiftBoxType>>;
}

export const TeamC = createContext<ContextProps | null>(null);

interface UserGiftBoxType {
  id: number;
  title: string;
  UserID: number;
  UserName: string;
  GiverID: number;
  GiverName: string;
  price: string;
  image: string;
  state: number;
}

const Context = ({ children }: { children: React.ReactNode }) => {
  const [userLogin, setUserLogin] = useState();
  const [userGiftBox, setUserGiftBox] = useState<UserGiftBoxType>();

  return (
    <TeamC.Provider
      value={{ userLogin, setUserLogin, userGiftBox, setUserGiftBox }}
    >
      {children}
    </TeamC.Provider>
  );
};

export default Context;
