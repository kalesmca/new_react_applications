import { DEPOSIT_MONEY, ADD_CUSTOMER } from '../../constants/actions';
import ApiService from '../API/apiService';
import { batch } from 'react-redux';
import axios from 'axios';


export const depositAmount = (data) => async (dispatch, getState) => {

    const { transaction } = getState();
    data = { ...data, currentBalance: transaction.availableAmount + data.amount }
    // const resp = await ApiService.saveFund(data);
    let resp;
    await axios.post('http://localhost:3000/customers', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
        .then((response) => {
            console.log(response);
            resp = response;
            console.log('resp::', resp);
            console.log('trans :', transaction);
            data = {
                ...data, ...{
                    availableAmount: transaction.availableAmount + data.amount,
                    date: data.date,
                    transactionList: [...transaction.transactionList, ...[data]],
                }
            }

            batch(() => {
                dispatch(updateTransactionList(data));
                // dispatch()
            })

        })
        .catch(function (error) {
            console.log(error);
            batch(() => {
                dispatch(updateTransactionList(data));
                // dispatch()
            })

        });

    // dispatch({
    //     type: DEPOSIT_MONEY,
    //     data: data
    // })
}



export const updateTransactionList = (data) => {
    return (
        {
            type: DEPOSIT_MONEY,
            data: data
        }
    )

}

export const addTestCustomers = (data) => {
    return (
        {
            type: ADD_CUSTOMER,
            data: data
        }
    )

}



