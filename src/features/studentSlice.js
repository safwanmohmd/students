import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const studentsList = JSON.parse(localStorage.getItem('studentsList'))
const initialState = {
    students: studentsList || [],
   
}

export const fetchStudents = createAsyncThunk('products/fetch', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
    return response.data

})

const studentSlice = createSlice({
    name: "students",
    initialState,
    reducers: {

        createStudent: (state, action) => {
            const { id, name, email, phone, username, website } = action.payload

            let newItem = [...state.students, { id, name, email, username, phone, website }];
            state.students = newItem;
            localStorage.setItem('studentsList', JSON.stringify(state.students));
        },
        deleteStudent: (state, action) => {

            const filtered = state.students.filter((x) => x.id !== action.payload.id)
            state.students = filtered
            localStorage.setItem('studentsList', JSON.stringify(state.students));
        },
        editStudent: (state, action) => {

            const { id, email, name,phone, website } = action.payload

            const matchStudent = state.students.find((x) => x.id === id)
            matchStudent.email = email
            matchStudent.name = name
            matchStudent.phone = phone
            matchStudent.website = website
            localStorage.setItem('studentsList', JSON.stringify(state.students));

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStudents.pending, (state) => {
            state.loading = true
        })
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.loading = false;

                const localData = localStorage.getItem('studentsList');


                if (!localData || JSON.parse(localData).length === 0) {
                    state.students = action.payload;
                    localStorage.setItem('studentsList', JSON.stringify(state.students));
                } else {
                    state.students = JSON.parse(localData);

                }
            })
            .addCase(fetchStudents.rejected, (state, action) => {
                state.error = action.error
            })
    }

})

export const { deleteStudent, setCategory, filterStudents, editStudent, createStudent, setSearch } = studentSlice.actions
export default studentSlice.reducer