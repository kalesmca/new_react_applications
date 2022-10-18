// import React from 'react';

// const MoneyTransactionComponent =() =>{
//     return(
//         <div>MoneyTransactionComponent</div>
//     )
// }

// export default MoneyTransactionComponent;

import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

import TextField from '@mui/material/TextField';
import { KeyboardDatePicker } from "@material-ui/pickers";

import Stack from '@mui/material/Stack';

const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];

function ConfirmationDialogRaw(props) {
    const { onClose, value: valueProp, open, isDeposit, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);
    const [selectedDate, handleDateChange] = useState(new Date("yyyy-mm-dd"))
    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const modifyDate = (e)=>{
        console.log('e:', e)
        handleDateChange(e.target.value)
    }

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(value);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            TransitionProps={{ onEntering: handleEntering }}
            open={open}
            {...other}
        >

            <DialogTitle>{isDeposit ? "Deposit" : "WithDraw"}</DialogTitle>
            <DialogContent dividers>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Amount" variant="outlined" />
                    <input type="date" value={selectedDate} onChange={(e)=>{modifyDate(e)}} />
                    {/* <KeyboardDatePicker
                        autoOk
                        variant="inline"
                        inputVariant="outlined"
                        label="With keyboard"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        InputAdornmentProps={{ position: "start" }}
                        onChange={date => handleDateChange(date)}
                    /> */}

                </Box>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel}>
                    Cancel
                </Button>
                <Button onClick={handleOk}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
}

ConfirmationDialogRaw.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
};

export default function ConfirmationDialog() {
    const [open, setOpen] = React.useState(false);
    const [isDeposit, setIsDeposit] = React.useState(true);
    const [value, setValue] = React.useState('Dione');

    const handleClickListItem = (flag) => {
        setIsDeposit(flag);
        setOpen(true);
    };

    const handleClose = (newValue) => {
        setOpen(false);

        if (newValue) {
            setValue(newValue);
        }
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List component="div" role="group">
                {/* <ListItem button divider disabled>
          <ListItemText primary="Interruptions" />
        </ListItem>
        <ListItem
          button
          divider
          aria-haspopup="true"
          aria-controls="ringtone-menu"
          aria-label="phone ringtone"
          onClick={handleClickListItem}
        >
          <ListItemText primary="Phone ringtone" secondary={value} />
        </ListItem>
        <ListItem button divider disabled>
          <ListItemText primary="Default notification ringtone" secondary="Tethys" />
        </ListItem> */}

                <Stack spacing={3} direction="row">
                    <Button variant="contained" onClick={() => { handleClickListItem(true) }}>Deposit</Button>
                    <Button variant="contained" onClick={() => { handleClickListItem(false) }}>Withdraw</Button>
                </Stack>
                <ConfirmationDialogRaw
                    id="ringtone-menu"
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    value={value}
                    isDeposit={isDeposit}
                />
            </List>
        </Box>
    );
}