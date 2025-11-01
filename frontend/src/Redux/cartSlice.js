import { createSlice } from "@reduxjs/toolkit";
//use "useSelector" to get the array
const initialState = {
  selectedProducts: localStorage.getItem("selectedProducts")
    ? JSON.parse(localStorage.getItem("selectedProducts"))
    : [],
  selectedProductsID: localStorage.getItem("selectedProductsID")
    ? JSON.parse(localStorage.getItem("selectedProductsID"))
    : [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  // action.payload = القيمة التي بين الأقواس
  reducers: {
    addToCart: (state, action) => {
      const productWithQuantity = { ...action.payload, quantity: 1 };
      state.selectedProducts.push(productWithQuantity);
      console.log("done");
      //action.payload = proudect from API
      state.selectedProductsID.push(action.payload.id);

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },
    increaseQuantity: (state, action) => {
      const increaseProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });

      increaseProduct.quantity += 1;

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
    },
    descreaseQuantity: (state, action) => {
      const increaseProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      increaseProduct.quantity -= 1;
      if (increaseProduct.quantity === 0) {
        const newArray = state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id;
        });
        const newArray2 = state.selectedProductsID.filter((item) => {
          return item !== action.payload.id;
        });
        state.selectedProducts = newArray;
        state.selectedProductsID = newArray2;
        localStorage.setItem(
          "selectedProducts",
          JSON.stringify(state.selectedProducts)
        );
        localStorage.setItem(
          "selectedProductsID",
          JSON.stringify(state.selectedProductsID)
        );
      }
    },
    deleteProduct: (state, action) => {
      const newArray = state.selectedProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      const newArray2 = state.selectedProductsID.filter((item) => {
        return item !== action.payload.id;
      });
      state.selectedProducts = newArray;
      state.selectedProductsID = newArray2;

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, increaseQuantity, descreaseQuantity, deleteProduct } =
  counterSlice.actions;

export default counterSlice.reducer;
