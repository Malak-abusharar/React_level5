import { createSlice } from "@reduxjs/toolkit";
//use "useSelector" to get the array
const initialState = {
  selectedProducts: [
  ],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  // action.payload = القيمة التي بين الأقواس
  reducers: {
    addToCart: (state, action) => {
      const productWithQuantity = { ...action.payload, "quantity": 1 };
      state.selectedProducts.push(productWithQuantity);
      console.log("done");
      //action.payload = proudect from API
    },
    increaseQuantity: (state, action) => {
      const increaseProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id
      });
      increaseProduct.quantity += 1
      //action.payload = proudect from user
      // console.log("done");
    },
    descreaseQuantity: (state, action) => {
      //action.payload = proudect from user
      console.log("done");
    },
    deleteProduct: (state, action) => {
      //action.payload = proudect from user
      console.log("done");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, increaseQuantity, descreaseQuantity, deleteProduct } =
  counterSlice.actions;

export default counterSlice.reducer;
