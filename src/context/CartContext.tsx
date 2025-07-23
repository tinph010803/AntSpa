import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"

interface CartContextType {
  cartCount: number
  addToCart: (quantity?: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartCount, setCartCount] = useState(0)

  const addToCart = (quantity: number = 1) => {
    setCartCount((prev) => prev + quantity)
  }

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
