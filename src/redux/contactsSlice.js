import { createSlice } from '@reduxjs/toolkit';
// import { initContacts } from './constants';
// import sid from 'shortid';
import { fetchContacts,addContact,deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
        items:[],
    isLoading:false,
    // error:null
  },
  
  extraReducers:b=>b
  // .addCase(addUser.pending,(state)=>{
  //   state.isLoading=true
  // })
  .addCase(fetchContacts.fulfilled,(state,{payload})=>{
    state.isLoading=false;
    state.items = payload
  })
   .addCase(addContact.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
   state.error=null;
  })
  
  
  .addCase(deleteContact.fulfilled,(state,{payload})=>{
    state.isLoading=false;
    state.items=state.items.filter(el=>el.id!==payload)
  })
  .addMatcher((action)=>action.type.endsWith("pending"),(state)=>{
    state.isLoading=true;
  })
  .addMatcher((action)=>action.type.endsWith("rejected"),(state,{payload})=>{
    state.isLoading=false;
    state.error=payload;
  })
  .addMatcher((action)=>action.type.endsWith("fulfilled"),(state,{payload})=>{
    state.isLoading=false;
  })
}
);

export const contactsReducer = contactsSlice.reducer; //slice reducer

//fetchContacts type contacts/fetchAll
//addContact POST type contacts/addContact
//deleteContact DELETE type contacts/deleteContact
