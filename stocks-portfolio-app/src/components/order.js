import React,{useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";
import {addCustomer} from '../redux/actions/customers'
import {useParams} from 'react-router-dom';



export default function OrderComponent() {
    const initValue = {
        name:"",
        age: "",
        degree: "",
        city: "",
        isValid:false,
    }
    const customers = useSelector((state) => state.customers);

    const { userId } = useParams();

    const dispatch = useDispatch();
    const [err, setErr] = useState(initValue)
    const [user, setUser] = useState(initValue);

    useEffect(()=>{
        console.log('user:', user, customers, userId)
        if(userId){
          setUser(customers.customerList[userId])
        }
    },[])


    const handleValidation = (field) => {
        if(field === 'name'){
            if(!user[field]){
                setErr({...err, [field]: "Please enter Name"}) 
            } else if(user[field].length < 5){
                setErr({...err, [field]: "Please enter at-least 6 Character"})
            } else {
                setErr({...err, [field]:""})
            }
        } else if(field === "age"){
            if(!user[field]){
                setErr({...err, [field]: "Please enter your age"}) 
            }else {
                setErr({...err, [field]:""})
            }
        }
        else if(field === "degree"){
            if(!user[field]){
                setErr({...err, [field]: "Please enter your degree"}) 
            }else {
                setErr({...err, [field]:""})
            }
        }
        else if(field === "city"){
            if(!user[field]){
                setErr({...err, [field]: "Please enter your city"}) 
            }else {
                setErr({...err, [field]:""})
            }
        }
    }

    const getButtonVisible = () =>{
        // return true;
        if(!err.name && !err.age && !err.city && !err.degree ){
            return true;
        } else {
            return false;
        }
    }
    const addUser = () =>{
        console.log('user:', user)
        dispatch(addCustomer(user));
        setUser(initValue)
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
      <TextField
        error={err.name}
        id="outlined-error"
        label="Name"
        value={user.name}
        onChange={(e)=>{setUser({...user, name: e.target.value})}}
        onBlur={()=>{handleValidation('name')}}
        helperText={err.name}
        disabled = {userId}
      />
      <TextField
        error={err.age}
        id="outlined-error"
        label="Age"
        value={user.age}
        onChange={(e)=>{setUser({...user, age: e.target.value})}}
        onBlur={()=>{handleValidation('age')}}
        helperText={err.age}
        disabled = {userId}
      />
    </div>
    <div>
    <TextField
        error={err.city}
        id="outlined-error"
        label="City"
        value={user.city}
        onChange={(e)=>{setUser({...user, city: e.target.value})}}
        onBlur={()=>{handleValidation('city')}}
        helperText={err.city}
        disabled = {userId}
      />
      <TextField
        error={err.degree}
        id="outlined-error"
        label="Degree"
        value={user.degree}
        onChange={(e)=>{setUser({...user, degree: e.target.value})}}
        onBlur={()=>{handleValidation('degree')}}
        helperText={err.degree}
        disabled = {userId}
      />
    </div>
    {
        !userId ? (<div>
        {
            getButtonVisible() ? (<Button variant="contained" onClick={()=>{addUser()}}>Add</Button>): null
        }
        
    </div>) : null
    }
    
    
  </Box>
  );
}
