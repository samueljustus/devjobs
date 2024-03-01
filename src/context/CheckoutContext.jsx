import { createContext, useState } from "react";

export const CheckoutContext = createContext("")

function CheckoutContextProvider({children}) {
    const [checkout, setCheckout] = useState(false);
    return (
<CheckoutContext.Provider value={{checkout, setCheckout}}>
{children}
</CheckoutContext.Provider>
    )
}

export default CheckoutContextProvider

