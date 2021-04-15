import React from "react";

export const MenuOpenContext = React.createContext({
  isOpen: false,
  toggleMenuOpen: () => {}
})
