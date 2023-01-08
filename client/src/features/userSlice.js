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
        },
        deleteUsers: (state, action) => { 
            const index = state.users.findIndex((user) => user._id === action.payload);
            console.log(index);
             state.users.splice(index, 1)
            
        },
    }
})

export const { setUser, setAllUsers, insertManyUser, deleteUsers  } = userSlice.actions;

export default userSlice.reducer