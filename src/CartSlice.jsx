import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  
  
  reducers: {
   
   
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
  const existingItem = state.items.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  
  } else {
    state.items.push({ name, image, cost, quantity: 1 });
    
  }
    },



    removeItem: (state, action) => {
      const {name} =action.payload;

  //alert("hola");


  //alert( name);

        state.items = state.items.filter(item => item.name !== name);

     //     alert("hola2");
            
    
    },
   






   
    addQuantity: (state, action) => {
  
      

      const { name, image, cost } = action.payload;
     // alert(cost);
       
      const updateItem = state.items.find(item => item.name === name);
     // alert(updateItem.name);  
      if (updateItem) {
        updateItem.quantity++;
       
      }
      
    
    },

    decQuantity: (state, action) => {
        
      const { name, image, cost } = action.payload;
      // alert(cost);
        
       const updateItem = state.items.find(item => item.name === name);
      // alert(updateItem.name);  
       if (updateItem) {
         updateItem.quantity--;
       }
       
    },

  },
});

export const { addItem, removeItem, addQuantity, decQuantity } = CartSlice.actions;

export default CartSlice.reducer;
