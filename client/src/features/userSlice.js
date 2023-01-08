import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        
    },
    reducers: {
        setUser: (state, action) => {
            state.users = [action.payload,...state.users]
        },
        setAllUsers: (state, action) => { 
            state.users = action.payload

        }
    }
})

export const { setUser, setAllUsers } = userSlice.actions;

export default userSlice.reducer