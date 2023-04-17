import { createSlice } from '@reduxjs/toolkit';
// import { initContacts } from './constants';
// import sid from 'shortid';
// import { fetchAll,addContact,deleteContact } from './operations';
import { registerUser, loginUser, logoutUser } from './operations';

const userSlice = createSlice({
  name: 'user',
  initialState: {
        user:{
            name:'Noname',
            email:'Guest',
            password:'',
            
        },
    token:'',
    // isLoading:false,
    error:null},
  
  extraReducers:b=>b
  // .addCase(addUser.pending,(state)=>{
  //   state.isLoading=true
  // })
   .addCase(registerUser.fulfilled, (state, { payload }) => {
      // state.isLoading = false;
      // state.user.isLoading = true;
      state.user = payload;
   state.error=null;
  })
  .addCase(loginUser.fulfilled, (state, { payload }) => {
      // state.isLoading = false;
      state.user = payload.user;
      // state.token = payload.token
   state.error=null;
  })
  .addCase(logoutUser.fulfilled, (state, { payload }) => {
      // state.isLoading = false;
      state.user.email = 'Guest';
    //   state.token = payload.token
   state.error=null;
  })
  
  
//   .addCase(fetchAll.fulfilled,(state,{payload})=>{
//     state.isLoading=false;
//     state.items = payload
//   })
//   .addCase(deleteContact.fulfilled,(state,{payload})=>{
//     state.isLoading=false;
//     state.items=state.items.filter(el=>el.id!==payload)
//   })
//   .addMatcher((action)=>action.type.endsWith("pending"),(state)=>{
//     state.isLoading=true;
//   })
  .addMatcher((action)=>action.type.endsWith("rejected"),(state,{payload})=>{
    // state.isLoading=false;
    state.error=payload;
    state.user.name='';
  })
  .addMatcher((action)=>action.type.endsWith("pending"),(state)=>{
    // state.isLoading=true;
    // state.error=payload;
    // state.user.name='';
  })
}
);

export const userReducer = userSlice.reducer; //slice reducer

//fetchContacts type contacts/fetchAll
//addContact POST type contacts/addContact
//deleteContact DELETE type contacts/deleteContact
