import { create } from "zustand";

// Define cart item interface
interface CartItem {
  id: string;
  name: string;
  cartName:string;
  price: number;
  quantity: number;
  image?: string;
  smallImage?: string; // Optional small image for cart display
}

interface StoreState {
  // Menu state
  menuIsOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;
  
  // Cart state
  cartIsOpen: boolean;
  toggleCart: () => void;
  closeCart: () => void;
  openCart: () => void;
  
  // Cart items
  cartItems: CartItem[];
  totalItems: number;
  totalPrice: number;
 
  // Cart actions
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
  getCartItemCount: () => number;
  getCartTotal: () => number;
}

const useStore = create<StoreState>((set, get) => ({
  // Menu state
  menuIsOpen: false,
  toggleMenu: () => {
    set((state) => ({ 
      menuIsOpen: !state.menuIsOpen,
      cartIsOpen: false // Ensure cart is closed when menu is toggled
    }));
  },
  closeMenu: () => {
    set({ menuIsOpen: false });
  },
  openMenu: () => {
    set({ 
      menuIsOpen: true,
      cartIsOpen: false // Ensure cart is closed when menu is opened
    });
  },
  
  // Cart state
  cartIsOpen: false,
  toggleCart: () => {
    set((state) => ({ 
      cartIsOpen: !state.cartIsOpen,
      menuIsOpen: false // Ensure menu is closed when cart is toggled
    }));
  },
  closeCart: () => {
    set({ cartIsOpen: false });
  },
  openCart: () => {
    set({ 
      cartIsOpen: true,
      menuIsOpen: false // Ensure menu is closed when cart is opened
    });
  },
  
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
  
  // Helper function to recalculate totals
  _recalculateTotals: (cartItems: CartItem[]) => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return { totalItems, totalPrice };
  },
  
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

  increaseQuantity: (id) => {
    set((state) => {
      // First check if item exists in cart
      const existingItem = state.cartItems.find(item => item.id === id);
      
      if (!existingItem) {
        console.warn(`Item with id ${id} not found in cart`);
        return state; // Return unchanged state
      }

      const newCartItems = state.cartItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      
      const totalItems = newCartItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = newCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      console.log('IncreaseQuantity - Item:', existingItem);
      console.log('IncreaseQuantity - New quantity:', existingItem.quantity + 1);
      console.log('IncreaseQuantity - New total price:', totalPrice);
      
      return {
        cartItems: newCartItems,
        totalItems,
        totalPrice,
      };
    });
  },

  decreaseQuantity: (id) => {
    set((state) => {
      const existingItem = state.cartItems.find(item => item.id === id);
      
      if (!existingItem) {
        console.warn(`Item with id ${id} not found in cart`);
        return state; // Return unchanged state
      }

      let newCartItems;
      
      if (existingItem.quantity <= 1) {
        // Remove item if quantity would become 0 or less
        newCartItems = state.cartItems.filter(item => item.id !== id);
      } else {
        // Decrease quantity by 1
        newCartItems = state.cartItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      
      const totalItems = newCartItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = newCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      console.log('DecreaseQuantity - New total price:', totalPrice);
      
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