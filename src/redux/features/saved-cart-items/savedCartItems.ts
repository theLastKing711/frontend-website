import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LatestProductItemDto } from '../../services/home/homeApi'

export interface SavedCartItemsState {
    savedCartItems: LatestProductItemDto[];
  }
  
  const initialState: SavedCartItemsState = {
    savedCartItems: [],
  }

export const savedCartItemsSlice = createSlice({
  name: 'savedCartItems',

  initialState,
  reducers: {
    toggleItem: (state, action: PayloadAction<LatestProductItemDto>) => {
      const isItemInCart = state.savedCartItems.find(item => item.id == action.payload.id)

      if (isItemInCart)
      {
        state.savedCartItems = state.savedCartItems.filter(x => x.id !== action.payload.id)
      }
      else {
        state.savedCartItems.push(action.payload)
      }
    },
    addItem: (state, action: PayloadAction<LatestProductItemDto>) => {
      state.savedCartItems.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<LatestProductItemDto>) => {
        state.savedCartItems = state.savedCartItems.filter(x => x.id !== action.payload.id)
    },
    emptyCart: (state) => {
        state.savedCartItems = [];
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem, emptyCart, toggleItem } = savedCartItemsSlice.actions

export default savedCartItemsSlice.reducer