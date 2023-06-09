import { createSlice } from "@reduxjs/toolkit";


type RootState = {
    userprofile: {
        value: {
            id: string | null;
            name: string | null;
            email: string | null;
            phone: string | null,
            about: string | null,
            education:string | null,
            language: string|  null,
            location:string | null,
            jobrole: string | null,
            image: string | null,
            cv: string| null


        };
    };
};

const intialValue = {
    value: {
        id: null,
        name: null,
        email: null,
        phone: null,
        about: null,
        education: null,
        language: null,
        location: null,
        jobrole: null,
        image: null,
        cv: null

    }
}


export const userprofileSlice = createSlice({
    name: "userprofile",
    initialState: intialValue,
    reducers: {
        addprofile: (state, action) => {

            state.value = action.payload
            console.log(state.value);


        },
        
    }
})

export const { addprofile } = userprofileSlice.actions













