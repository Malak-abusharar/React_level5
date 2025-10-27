import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [
    {
      id: 1,
      productName: "Cup 1",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 100,
      imageLink:
        "https://res.cloudinary.com/ddt1tb3u0/image/upload/v1761391101/model4_nv2p6g.webp",
      quantity: 1,
    },
    {
      id: 2,
      productName: "Cup 2",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 200,
      imageLink:
        "https://res.cloudinary.com/ddt1tb3u0/image/upload/v1761391086/model2_agkynl.jpg",
      quantity: 1,
    },
    {
      id: 3,
      productName: "Cup 3",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 300,
      imageLink:
        "https://res.cloudinary.com/ddt1tb3u0/image/upload/v1761391079/model1_mfyjwg.webp",
      quantity: 1,
    },
  ],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  // action.payload = القيمة التي بين الأقواس
  reducers: {
    addToCart: (state, action) => {
      console.log("done");
      //action.payload = proudect from API 
    },
    increaseQuantity: (state, action) => {
      //action.payload = proudect from user 
      console.log("done");
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
