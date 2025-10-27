import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedProducts: [
     {
   id: 1,
   productName: "Cup 1",
   description:
     "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
   price: 100,
   imageLink: "https://res.cloudinary.com/ddt1tb3u0/image/upload/v1761391101/model4_nv2p6g.webp",
 },
 {
   id: 2,
   productName: "Cup 2",
   description:
     "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
   price: 200,
   imageLink: "https://res.cloudinary.com/ddt1tb3u0/image/upload/v1761391086/model2_agkynl.jpg",
 },
 {
   id: 3,
   productName: "Cup 3",
   description:
     "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
   price: 300,
   imageLink: "https://res.cloudinary.com/ddt1tb3u0/image/upload/v1761391079/model1_mfyjwg.webp",
 }
  ],
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      // state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {incrementByAmount } = counterSlice.actions

export default counterSlice.reducer