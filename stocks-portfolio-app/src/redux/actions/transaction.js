import {DEPOSIT_MONEY } from '../../constants/actions';

export const depositAmount = (data) =>{
    return (dispatch, getState) => {
        const { transaction } = getState();
        data = {...data, currentBalance: transaction.availableAmount + data.amount}

        console.log('trans :', transaction);
        data = {...data, ...{availableAmount: transaction.availableAmount + data.amount, 
                            date: data.date,
                            transactionList: [...transaction.transactionList, ...[data]], 
                            }}

        dispatch({
            type: DEPOSIT_MONEY,
            data: data
        })
    }
    
}

