import {createSlice, nanoid} from '@reduxjs/toolkit';
const initialState = {
  name: '',
  data: [],
  selectedTodo: [],
  editable: false,
  posts: [],
  posts2: [],
  posts3: [],
  loading: false,
  mobile: '',
};

export const addTodoSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      const obj = {
        id: nanoid(),
        name: actions.payload,
      };
      console.log(obj.name);
      updatedData = [...state.data];

      updatedData = updatedData.filter(val => {
        if (val.name != obj.name) {
          return true;
        } else {
          return false;
        }
      });

      state.data = updatedData;
      updatedData = [...state.data, obj];
      state.data = updatedData;
    },

    deleteTodo: (state, actions) => {
      updatedData = [...state.data];
      updatedData = updatedData.filter(val => {
        if (val.id == actions.payload) {
          return false;
        } else {
          return true;
        }
      });
      state.data = [...updatedData];
    },
    selectedTodoList: (state, actions) => {
      const obj = actions.payload;
      if (state.selectedTodo.indexOf(obj) != -1) {
        updatedData = [...state.selectedTodo];
        updatedData = updatedData.filter(val => {
          if (val != obj) {
            return true;
          } else {
            return false;
          }
        });

        state.selectedTodo = updatedData;
      } else {
        updatedData = [...state.selectedTodo, obj];
        state.selectedTodo = updatedData;
      }
    },
    selectedDelete: state => {
      updatedData = [...state.data];
      for (let i = 0; i < state.selectedTodo.length; i++) {
        updatedData = updatedData.filter(val => {
          if (val.id != state.selectedTodo[i]) {
            return true;
          }
        });

        state.data = [...updatedData];
      }
    },
    edit: (state, actions) => {
      const {id, name} = actions.payload;
      state.data.map(val => {
        if (val.id == id) {
          val.name = name;
        }
        return val;
      });
    },
  },
});
export const {addTodo, deleteTodo, selectedTodoList, selectedDelete, edit} =
  addTodoSlice.actions;

export default addTodoSlice.reducer;
