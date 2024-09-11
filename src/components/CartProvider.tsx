import { createContext, useState } from "react";
import ProductsInterface from "./productsInterface";

interface CartContextInterface {
  cart: ProductsInterface[];
  addToCart: (product: ProductsInterface) => void;
  removeFromCart: (product: ProductsInterface) => void;
  handleIncreaseQuantity: (product: ProductsInterface) => void;
  handleDecreaseQuantity: (product: ProductsInterface) => void;
}

export const CartContext = createContext<CartContextInterface>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  handleIncreaseQuantity: () => {},
  handleDecreaseQuantity: () => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ProductsInterface[]>([]);

  const addToCart = (product: ProductsInterface) => {
    const productExists = cart.find((item) => item.id === product.id);
    if (productExists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...productExists, quantity: productExists.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product: ProductsInterface) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const handleIncreaseQuantity = (product: ProductsInterface) => {
    const productExists = cart.find((item) => item.id === product.id);
    if (productExists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...productExists, quantity: productExists.quantity + 1 }
            : item
        )
      );
    }
  };

  const handleDecreaseQuantity = (product: ProductsInterface) => {
    const productExists = cart.find((item) => item.id === product.id);
    if (productExists && productExists.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...productExists, quantity: productExists.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
