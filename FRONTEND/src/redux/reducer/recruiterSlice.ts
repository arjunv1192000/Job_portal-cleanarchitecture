import { createSlice } from "@reduxjs/toolkit";


type RootState = {
    user: {
      value: {
        id: string | null;
        companyname:string|null;
        name: string | null;
        email: string | null;
        image:string |null;
        access_token: string;
        refresh_token:string;
      };
    };
  };

const intialValue = {value:{id:null,
    companyname:null,
    name:null,
    email:null,
    image:null,
    access_token:"",
   
    
}}


export const recruiterSlice=createSlice({
    name:"user",
    initialState:intialValue,
    reducers:{
        login:(state,action)=>{
            console.log(intialValue);
               state.value= action.payload 
               console.log(state.value);
               
           
        },
        logout:()=>{
            localStorage.removeItem('access_token_recruiter'),
            localStorage.removeItem('refresh_token_recruiter')
            return intialValue
            
        }
    }
})

export const { login, logout } = recruiterSlice.actions













