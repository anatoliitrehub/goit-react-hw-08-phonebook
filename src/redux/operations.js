import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
const token = {
    set(token){
        axios.defaults.headers.Authorization = `Bearer ${token}`;
    },
    unset(){
        axios.defaults.headers.Authorization = '';
  
    }
}

// token.set("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjNjI0OWVlOGI3OTAwMTQ2NGM0NzQiLCJpYXQiOjE2ODE3NTcwNjZ9.XgFNqMbsgs3bctTa29qg6e7W9HE_oGAhBqY54R7GjPQ")

///users/signup

export const initToken = (currentToken) => {
    token.set(currentToken);
}

export const registerUser = createAsyncThunk("user/register", async (user,thunkAPI)=>{
    try{
        const resp = await axios.post("/users/signup", user,{
            headers: {
                'Content-Type': 'application/json'
              }
        });
        token.set(resp.data.token)
        return resp.data
    } catch (e){
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const loginUser = createAsyncThunk("user/login", async (user,thunkAPI)=>{
    try{
        const resp = await axios.post("/users/login", user,{
            headers: {
                'Content-Type': 'application/json'
              }
        });
        token.set(resp.data.token)
        return resp.data
    } catch (e){
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const logoutUser = createAsyncThunk("user/logout", async (_,thunkAPI)=>{
    try{
        const resp = await axios.post("/users/logout");
        token.unset();
        return resp.data
    } catch (e){
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const reLoginUser = createAsyncThunk("user/reLogin", async (currentToken,thunkAPI)=>{
    try{
    const resp = await axios.get("/users/current",{
        headers:{
            Authorization: `Bearer ${currentToken}`
        }
    });
    console.log(currentToken)
    token.set(currentToken)
    return resp.data;
    }
    catch(e){
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_,thunkAPI)=>{
    try{
    const resp = await axios.get("/contacts");
    return resp.data;
    }
    catch(e){
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const addContact = createAsyncThunk("contacts/addContact", async ({name,phone:number},thunkAPI)=>{
    try{
        const resp = await axios.post("/contacts", {name,number},{
            headers: {
                'Content-Type': 'application/json'
              }
        });
        
        return resp.data
    } catch (e){
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id,thunkAPI)=>{
    try{
        const resp = await axios.delete(`/contacts/${id}`,{
            headers:{
            contactId:id,
            }
        }).then(()=>id);
        return resp
    } catch (e){
        return thunkAPI.rejectWithValue(e.message)
    }
})