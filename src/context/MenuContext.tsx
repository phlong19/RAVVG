import React, { createContext, useContext, useState } from "react";

interface Value {
  show: boolean;
  open: () => void;
  close: () => void;
}

const MenuContext = createContext<Value>({ show: false, open, close });

function MenuMobile({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);

  const open = () => setShow(true);
  const close = () => setShow(false);

  return (
    <MenuContext.Provider value={{ show, open, close }}>
      {children}
    </MenuContext.Provider>
  );
}

function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("Context has been used outside provider");
  }
  return context;
}

export { MenuMobile, useMenu };
