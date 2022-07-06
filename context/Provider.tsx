import React, { PropsWithChildren, useState } from "react";

import AppContext from "./AppContext";

const Provider = ({ children }: PropsWithChildren) => {
  const [cartQuantity, setCartQuantity] = useState(0)

  const value = {
    cartQuantity,
    setCartQuantity,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default Provider
