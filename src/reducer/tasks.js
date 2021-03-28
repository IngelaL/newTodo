import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export const tasks  = createSlice({
    name: 'tasks',
    initialState:  {
        title: 'todo-list',
        items: [
        {   id: 1, 
            text: 'Learn React', 
            complete: true,
            created: moment(new Date()).format()
        },

        {   id: 2, 
            text: 'Read a book', 
            complete: true,
            created: moment(new Date()).format()
        },

        {   id: 3, 
            text: 'Bake a mudcake', 
            complete: true,
            created: moment(new Date()).format()
        }
    ]
},

reducers: {
    //state here is the objects inside the todos
    removeOne: (state, action) => {
      const itemId = action.payload;
      const filteredList = state.items.filter(item => item.id !== itemId)
      state.items = filteredList;
    },

    addOne: (state, action) => {
      const newTask = {
        id: state.items.length === 0 ? 0 : Math.max(...state.items.map(item => item.id)) + 1,
        text: action.payload,
        complete: false,
        created: moment(new Date()).format()
    }
        const newTaskList = [...state.items, newTask];
        state.items = newTaskList;  
    }
}
})