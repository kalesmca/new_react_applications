import React from 'react';
import TransactionListComponent from './components/transactionListComponent';
import MoneyTransactionComponent from './components/moneyTransaction';
import { useSelector, useDispatch } from "react-redux";

const WalletContainer =() =>{
    const dispatch = useDispatch();
    const transactionState = useSelector((state)=> state.transaction)
    return(
        <div>
            <div>My Wallet</div>
            <div>
                <span>Available Amount</span>
                <span>{transactionState.availableAmount}</span>
            </div>
            <MoneyTransactionComponent/>

            <TransactionListComponent/>
        </div>
    )
}

export default WalletContainer;