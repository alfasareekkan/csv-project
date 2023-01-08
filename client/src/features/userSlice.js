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
        },
        insertManyUser: (state, action) => { 
            state.users = [...action.payload,...state.users]
        }
    }
})

export const { setUser, setAllUsers, insertManyUser } = userSlice.actions;

export default userSlice.reducer