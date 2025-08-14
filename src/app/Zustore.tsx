import { create } from "zustand";

// Define cart item interface
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface StoreState {
  // Menu state
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;
  
  // Cart state
  cartItems: CartItem[];
  totalItems: number;
  totalPrice: number;
 
  
  // Cart actions
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getCartItemCount: () => number;
  getCartTotal: () => number;
}

const useStore = create<StoreState>((set, get) => ({
  // Menu state
  isOpen: false,
  toggleMenu: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },
  closeMenu: () => {
    set({ isOpen: false });
  },
  openMenu: () => {
    set({ isOpen: true });
  },
  
  // Cart state
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
  
  // Cart actions
  addToCart: (item, quantity) => {
    set((state) => {
      const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);
      
      let newCartItems;
      if (existingItem) {
        // Update quantity if item already exists
        newCartItems = state.cartItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        // Add new item to cart
        newCartItems = [...state.cartItems, { ...item, quantity }];
      }
      
      const totalItems = newCartItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = newCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      return {
        cartItems: newCartItems,
        totalItems,
        totalPrice,
      };
    });
  },
  
  removeFromCart: (id) => {
    set((state) => {
      const newCartItems = state.cartItems.filter(item => item.id !== id);
      const totalItems = newCartItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = newCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      return {
        cartItems: newCartItems,
        totalItems,
        totalPrice,
      };
    });
  },
  
  updateQuantity: (id, quantity) => {
    set((state) => {
      let newCartItems;
      
      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        newCartItems = state.cartItems.filter(item => item.id !== id);
      } else {
        // Update item quantity
        newCartItems = state.cartItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        );
      }
      
      const totalItems = newCartItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = newCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      return {
        cartItems: newCartItems,
        totalItems,
        totalPrice,
      };
    });
  },
  
  clearCart: () => {
    set({
      cartItems: [],
      totalItems: 0,
      totalPrice: 0,
    });
  },
  
  getCartItemCount: () => {
    return get().totalItems;
  },
  
  getCartTotal: () => {
    return get().totalPrice;
  }
}));

export default useStore;