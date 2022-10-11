import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";
import { addTask } from '../redux/actions/task'
import { useParams } from 'react-router-dom';
import ModalComponent from '../shared/components/modal';
import DatePickerComponent from '../shared/components/date-picker';
import DropDownComponent from '../components/drop-down';
import {TASK_TYPES} from '../constants/config';

export default function AddTaskComponent() {
    const initValue = {
        amt: "",
        taskId: Math.round(new Date().getTime() / 100000),
        catId: "",
        category: "",
        subCategory: "",
        note: "",
        isExpense: false,
        date: new Date(),
        type: "INCOME",
        typeId: "1"
    }
    // const customers = useSelector((state) => state.customers);

    const dispatch = useDispatch();
    const [task, setTask] = useState(initValue);

    const taskTypeChange = (data) => {
        console.log('data:', data)
        debugger
        setTask({...task, type:data.target.value.label, typeId: data.target.value.id})
        console.log('task:',task)
    }

    const addTask = () => {
        console.log('user:', task)
        dispatch(addTask(task));
        setTask(initValue)
    }
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <ModalComponent />
            </div>

            <div>
                <DatePickerComponent />
                <div>
                    <DropDownComponent data={TASK_TYPES} value={task.type} handleChange = {(data)=>{taskTypeChange(data)}} />
                    {/* <DropDownComponent /> */}
                </div>

                <TextField
                    error=""
                    id="outlined-error"
                    label="Amount"
                    value={task.amt}
                    onChange={(e) => { setTask({ ...task, amt: e.target.value }) }}
                />
                <TextField
                    id="outlined-error"
                    label="Note"
                    value={task.note}
                    onChange={(e) => { setTask({ ...task, note: e.target.value }) }}
                />
            </div>
            <Button variant="contained" onClick={() => { addTask() }}>Add</Button>
        </Box>
    );
}
