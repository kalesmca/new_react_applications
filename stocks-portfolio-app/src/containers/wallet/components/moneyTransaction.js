
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from "react-redux";
import {depositAmount} from '../../../redux/actions/transaction';



const initState = {
    amount: null,
    date: new Date()
}

function ConfirmationDialogRaw(props) {
    const { onClose, value: valueProp, open, isDeposit, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const [obj, setObj] = useState(initState)
    const radioGroupRef = React.useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        console.log(obj);
        dispatch(depositAmount(obj))
        onClose(value);
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
                    <TextField id="outlined-basic"  type='number' label="Amount" variant="outlined" value={obj.amount} onChange={(e)=>{setObj({...obj, ...{amount: parseInt(e.target.value)}} )}}/>
                    <input type="date" value={obj.date} onChange={(e)=>{setObj({...obj, ...{date: e.target.value}})}} />             

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
