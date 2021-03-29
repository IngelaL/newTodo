import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export const tasks  = createSlice({
    name: 'tasks',
    initialState:  {
        title: 'todo-list',
        items: [
        {   id: 1, 
            text: 'Learn React', 
            complete: false,
            created: moment(new Date()).format()
        },

        {   id: 2, 
            text: 'Read a book', 
            complete: false,
            created: moment(new Date()).format()
        },

        {   id: 3, 
            text: 'Bake a mudcake', 
            complete: false,
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
    },

    clearAll: (state) => {
        state.items = []
    },

    toggleDone: (state, action) => {
        const foundItem = state.items.find((item) => item.id === action.payload)

          //Toggle the value of complete, so it changes to true when you click the checkbox and false if you uncheck.
            if (foundItem) {
              foundItem.complete = ! foundItem.complete      
    }
    }
}
})