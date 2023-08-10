import { createSlice } from '@reduxjs/toolkit'
import type { Action, Middleware, PayloadAction } from '@reduxjs/toolkit'
import { LatestProductItemDto } from '../../services/home/homeApi'
import { RootState } from 'src/redux/store';

export interface SavedCartItemsState {
    savedCartItems: LatestProductItemDto[];
  }

  const getCartFromStorage = () => {
    const productsListJson = localStorage.getItem('product-cart');
    

    if(productsListJson)
    {
      const productsList = JSON.parse(productsListJson) as LatestProductItemDto[];

      return productsList;
    }

    return [];
     
  }
  
  const initialState: SavedCartItemsState = {
    savedCartItems: getCartFromStorage(),
  }

export const savedCartItemsSlice = createSlice({
  name: 'savedCartItems',
  
  initialState,
  reducers: {
    toggleItem: (state, action: PayloadAction<LatestProductItemDto>) => {

      console.log("action payload", action.payload)
      
      const isItemInCart = state.savedCartItems.find(item => item.id == action.payload.id)

      if (isItemInCart)
      {
        state.savedCartItems = state.savedCartItems.filter(x => x.id !== action.payload.id)
      }
      else {
        state.savedCartItems.push({...action.payload, quantity: action.payload.quantity});
      }
    },
    addItem: (state, action: PayloadAction<LatestProductItemDto>) => {
      
      state.savedCartItems.push({...action.payload, quantity: action.payload.quantity});

    },
    removeItem: (state, action: PayloadAction<number>) => {
        state.savedCartItems = state.savedCartItems.filter(x => x.id !== action.payload)
    },
    emptyCart: (state) => {
        state.savedCartItems = [];
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const isItemInCart = state.savedCartItems.find(item => item.id == action.payload)

      if (isItemInCart)
      {
        state.savedCartItems = state.savedCartItems.map(item => {
          if(item.id === action.payload) {
            return {...item, quantity: item.quantity + 1}
          }
          return item;   
        })
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const isItemInCart = state.savedCartItems.find(item => item.id == action.payload)

      if (isItemInCart)
      {
        state.savedCartItems = state.savedCartItems.map(item => {
          if(item.id === action.payload) {
            return {...item, quantity: item.quantity - 1}
          }
          return item;   
        })
      }
    },
    setQuantity: (state, action: PayloadAction<{id: number, value: number}>) => {
      const isItemInCart = state.savedCartItems.find(item => item.id == action.payload.id)

      if (isItemInCart)
      {
        state.savedCartItems = state.savedCartItems.map(item => {
          if(item.id === action.payload.id) {
            return {...item, quantity: action.payload.value}
          }
          return item;   
        })
      }
    }, 
  },
})

//if we call next(action) before getState we get state after dispatch aka new state,
//  if we use it before we get old state with it
export const storageMiddleWare: Middleware<(action: Action<'addItem'>) => number, RootState> = 
  ( { dispatch, getState}) => 
  (next) => 
  (action: 
    Action<"savedCartItems/addItem" | "savedCartItems/removeItem" | "savedCartItems/toggleItem" | "savedCartItems/emptyCart">) => {

  // console.log("action", action);

  const result = next(action);
  
  if(
     action.type === 'savedCartItems/addItem' ||
     action.type === 'savedCartItems/toggleItem'
    ) {
    const productsList = getState().savedCartItems.savedCartItems;

    console.log("products list", productsList);
    
    const serializedProductList = JSON.stringify(productsList);
    
    localStorage.setItem('product-cart', serializedProductList);
  }

  if(action.type === 'savedCartItems/removeItem')
  {
    const productsList = getState().savedCartItems.savedCartItems;

    if(productsList.length === 0)
    {
      localStorage.removeItem("product-cart");
    }
  
  }

  if(action.type === 'savedCartItems/emptyCart')
  {
    localStorage.removeItem("product-cart");
  }
  
  return result;
  
}

// Action creators are generated for each case reducer function
export const { addItem, emptyCart, toggleItem,
              removeItem, increaseQuantity, decreaseQuantity ,
              setQuantity
             } = savedCartItemsSlice.actions

export default savedCartItemsSlice.reducer