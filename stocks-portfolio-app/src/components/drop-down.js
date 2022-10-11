import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDownComponent(props) {
  const [age, setAge] = React.useState('');
  console.log('props :', props)
  
  const handleChange = (event) => {
    
    setAge(event.target.value);
  };

  return (
    
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">{props.data.dropDownLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={props.value}
          
          onChange={(e)=>{props.handleChange(e)}}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          {
            props.data ? props.data.optionList.map((option)=>{
              
              return(<MenuItem value={option} key={option.id}>{option.label}</MenuItem>)
            }) :""
          }
          
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
      
    
  );
}
