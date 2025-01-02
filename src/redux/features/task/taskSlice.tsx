import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task: {
        id: "asdfgasdfg",
        title: "Initialize frontend",
        description: "Create Home page, and routing",
        dueDate: "2025-11",
        isCompleted: false, 
        priority: "High",
    },
};

const taskSlice = createSlice({
    name: "task",
    initialState ,
    reducers: {},
});

export default taskSlice.reducer ;