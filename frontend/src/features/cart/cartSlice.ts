import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    entities: [] as any[],
    // isError: false,
    // isSucces: false,
    // isLoading: false,
    // message: ''
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<any>) {
            state.entities.push(action.payload)
        },
        
        //remove item
        removeItem(state, action: PayloadAction<any>) {
            state.entities = state.entities.filter((item) => item.id !== action.payload)
        }
        //clear cart
    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer