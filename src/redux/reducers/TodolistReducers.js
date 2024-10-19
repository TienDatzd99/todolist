import { createSlice } from '@reduxjs/toolkit'
import { Result } from 'antd';
import axios from 'axios'; 
const initialState = {

  dataTaskNotComplete: [
    {
      "id": 1,
      "title": "Buy groceries",
      "description": "Purchase vegetables, fruits, and milk from the supermarket",
      "dateTime": "2024-10-18 10:00 AM",
      "completed": false
    },
    {
      "id": 2,
      "title": "Clean the house",
      "description": "Sweep and mop all rooms, clean the bathroom, and organize the living room",
      "dateTime": "2024-10-18 12:00 PM",
      "completed": false
    },
    {
      "id": 3,
      "title": "Finish project report",
      "description": "Complete the final report for the ongoing project and send it to the manager",
      "dateTime": "2024-10-18 03:00 PM",
      "completed": false
    },
    {
      "id": 4,
      "title": "Exercise for 30 minutes",
      "description": "Go for a jog or follow a home workout routine for 30 minutes",
      "dateTime": "2024-10-18 05:00 PM",
      "completed": false
    },
    {
      "id": 5,
      "title": "Read a book",
      "description": "Read at least 50 pages of the current novel",
      "dateTime": "2024-10-18 07:00 PM",
      "completed": false
    }
  ],
  dataTaskComplete: [
    {
      "id": 6,
      "title": "Pay electricity bill",
      "description": "Pay the monthly electricity bill online",
      "dateTime": "2024-10-17 08:00 AM",
      "completed": true
    },
    {
      "id": 7,
      "title": "Call mom",
      "description": "Catch up with mom over a phone call",
      "dateTime": "2024-10-17 09:00 AM",
      "completed": true
    },
    {
      "id": 8,
      "title": "Submit tax return",
      "description": "Complete and submit the annual tax return online",
      "dateTime": "2024-10-17 11:00 AM",
      "completed": true
    },
    {
      "id": 9,
      "title": "Schedule dentist appointment",
      "description": "Book a dentist appointment for the annual checkup",
      "dateTime": "2024-10-17 02:00 PM",
      "completed": true
    },
    {
      "id": 10,
      "title": "Organize workspace",
      "description": "Clean and organize the desk, sort files and clear clutter",
      "dateTime": "2024-10-17 04:00 PM",
      "completed": true
    }
  ]
  
  

}

const TodolistReducers = createSlice({
  name: 'TodolistReducer',
  initialState,
  reducers: {
   addTaskAction: (state,action)=>{
    console.log(action);
   }
  }
});

export const { addTaskAction } = TodolistReducers.actions

export default TodolistReducers.reducer


//------------------ action thunk ------------
